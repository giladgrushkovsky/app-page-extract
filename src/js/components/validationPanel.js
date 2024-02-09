app.component("validationPanel", {
  props: {
    validationData: {
      type: Array,
      required: true,
    },
  },
  template:
    /*html*/
    `
      
      <panel-box :type="this.panelStyle"> 
        <panel-header> 
            <a href="#bagApp\Services\Application\Validate\Validators\TrustworthinessValidation" style="color:black;" class="" role="button" data-toggle="collapse" aria-expanded="true" aria-controls="bagApp\Services\Application\Validate\Validators\TrustworthinessValidation">
                {{title}}
                <i class="fa fa-plus pull-right"></i>
            </a>
        </panel-header>
        <div> 
            <ul class="list-group">
                <template v-for="row in validationData">
                    <li  class="list-group-item bold" :class="row.details? 'a' : 'text-success'"  style="overflow: auto">
                        {{row.text}}
                        <span v-if="row.details" class="label label-danger pull-right">{{row.details ? row.details.length : ''}}</span>
                        <span v-if="!row.details" class="label label-success pull-right"><i class="fa fa-check"></i></span>
                    </li>
                    <template v-if="row.details">
                        <li v-for="detail in row.details" class="list-group-item" :class="detail.error ? 'text-danger' : 'text-warning'">
                            <i class="fa fa-fw " :class="detail.error ? 'fa-warning' : 'fa-exclamation'"></i> 
                            Cannot approve an application with Subsistence loan purpose. See Policy 8.5. 
                        </li>
                        
                    </template>
                
                </template>
                

            </ul>

        </div>
            
        </panel-box> 
        
           `,
  data() {
    return {};
  },
  methods: {
    
  },
  computed: {
    title: function () {
      return this.passed ? "Validation Passed" : "Validation Failed";
    },
    passed: function () {
      let value = false;
      // debugger;
      for (
        let index = 0;
        index < this.validationData.length && !value;
        index++
      ) {
        if (this.validationData[index].details) {
          for (
            let detailIndex = 0;
            detailIndex < this.validationData[index].details.length && !value;
            detailIndex++
          ) {
            value =
              value || this.validationData[index].details[detailIndex].error;
          }
        }
      }
      return !value;
    },
    panelStyle: function () {
      return this.passed ? "default" : "danger";
    },
  },
  
});
