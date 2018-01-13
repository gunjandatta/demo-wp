<template>
  <div id="webpart">
    <h2>My Contacts</h2>
    <div class="table">
      <template v-for="item in items">
        <div class="row" v-bind="contact">
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
  data: {
    items: []
  },
  created: function() {
    // See if the environment exists
    if (ContextInfo.existsFl) {
      // Get the list
      new List("My Contacts")
        // Get the items
        .Items()
        // Execute the results
        .execute(function(items) {
          // Update the items
          this.items = items.results;
        });
    } else {
      // Use test data
      this.items = [
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
h2 {
  color: #42b983;
  font-weight: normal;
}
</style>
