app.component("applicationMatches", {
  props: {
    rows: {
      type: Object,
      required: true,
    },
    pageSize: {
      type: String,
    },
  },
  template:
    /*html*/
    `
        <panel-box type="default">
            <app-table>
                <thead>
                <tr class="text-primary">
                    <th colspan="4">Application Matches</th>
                </tr>
                </thead>
                <tbody>
                <tr v-for="row in workRows" >
                    <td>{{row.status}} </td>
                    <td><a href="/applications/view/{{row.idNumber}}">{{row.name}}</a></td>
                    <td>{{row.idNumber}}</td>
                    <td>{{row.email}}</td>
                    <td>{{row.email}}</td>
                    <td>{{row.date}}</td>
                    <td><icon-button icon="files-o" btntype="link"/> </td>
                    
                </tr>
                </tbody>
                <tfoot v-if="showNav">
                    <tr>
                        <td><button :disabled="disablePrev" v-on:click="prevPage" class="btn btn-info btn-sm">
                                Prev.
                            </button>
                             <button :disabled="disableNext" v-on:click="nextPage" class="btn btn-info btn-sm">Next
                            </button></td>
                    </tr>
                </tfoot>
            </app-table>
            
         </panel-box>
         `,
  data() {
    return {
      startIndex: 0,
      workPageSize: this.pageSize ?  Number(this.pageSize) : this.rows.length,
      showNav: this.pageSize ? true : false,
    };
  },
  methods: {
    nextPage: function () {
      this.startIndex += this.workPageSize;
    },
    prevPage: function () {
      this.startIndex -= this.workPageSize;
    },
  },
  computed: {
    workRows: function () {
      return this.rows.slice(
        this.startIndex,
        this.workPageSize + this.startIndex
      );
    },
    disableNext: function () {
      return this.startIndex + this.workPageSize >= this.rows.length
        ? true
        : false;
    },
    disablePrev: function () {
      return this.startIndex == 0 ? true : false;
    },
  },
});
