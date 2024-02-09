
app.component("panelBox", {
  props: {
    type: {
      type: String,
      required: true,
    },
    
  },
  template:
    /*html*/
    `<div class="panel" :class="'panel-'+type"> 
        <slot/>
      </div>
       `,
  
  methods: {},
  computed: {},
});
