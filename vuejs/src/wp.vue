<template>
  <div id="webpart">
    <div class="table">
      <template v-for="item in items">
        <div class="row">
          <div>{{ item.MCCategory }}</div>
          <div>{{ item.Title }}</div>
          <div>{{ item.MCPhoneNumber }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { ContextInfo, List } from "gd-sprest";
export default {
  name: "WebPart",
  data: function() {
    return {
      items: []
    };
  },
  created: function() {
    // See if the environment exists
    if (ContextInfo.existsFl) {
      let wp = this;

      // Get the list
      new List("My Contacts")
        // Get the items
        .Items()
        // Execute the results
        .execute(function(items) {
          // Update the items
          wp.items = items.results;
        });
    } else {
      // Use test data
      wp.items = [
        {
          MCCategory: "Business",
          MCPhoneNumber: "111-111-1111",
          Title: "John A. Doe"
        },
        {
          MCCategory: "Business",
          MCPhoneNumber: "222-222-2222",
          Title: "John B. Doe"
        },
        {
          MCCategory: "Family",
          MCPhoneNumber: "333-333-3333",
          Title: "John C. Doe"
        },
        {
          MCCategory: "Family",
          MCPhoneNumber: "444-444-4444",
          Title: "John D. Doe"
        },
        {
          MCCategory: "Personal",
          MCPhoneNumber: "555-555-5555",
          Title: "John E. Doe"
        },
        {
          MCCategory: "Personal",
          MCPhoneNumber: "666-666-6666",
          Title: "John F. Doe"
        }
      ];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  justify-content: center;
}

.row > div {
  padding: 5px 10px;
}

.row > div:first-child {
  color: #42b983;
}
</style>
