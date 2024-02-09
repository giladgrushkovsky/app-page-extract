app.component("alertsList", {
  props: {
    rows: {
      type: Object,
      required: true,
    },
  },
  template:
    /*html*/
    ` 
      <template v-if=" this.showTemplate"> 
        <table class="table table-condensed table-bordered table-striped text-center">
          <tbody>
                <tr class="text-danger" style="">
                    <th>
                        <i class="fa fa-fw fa-warning"></i> {{this.alertsTitile}}:
                    </th>
                </tr>
                <tr class="text-danger" v-for="row in workRows">
                    <th>
                        {{row.text}}
                    </th>
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
        </table>
        </template>
            
        
         `,
  data() {
    return {
      startIndex: 0,
      workPageSize: this.pageSize ?  Number(this.pageSize) : this.rows.length,
      showNav: this.pageSize ? true : false,
    };
  },
  // setup(p){ debugger;},
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
      if(!this.rows ) {
        return [];
      }
      return this.rows.slice(
        this.startIndex,
        this.workPageSize + this.startIndex
      );
    },
    alertsTitile: function(){
      return this.workRows.length > 1 ? 'Alerts': 'Alert';
    },
    showTemplate: function(){
      return this.workRows.length !== 0;
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
