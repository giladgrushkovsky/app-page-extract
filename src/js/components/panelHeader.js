

app.component("panelHeader", {
  props: {
    test:{
      type:String
    }
  },
  template:
    /*html*/
    `<div class="panel-heading">
        <slot/>
      </div>
       `,
  
  methods: {},
  computed: {},
});



app.component("panelFotter", {
  props: {
    test:{
      type:String
    }
  },
  template:
    /*html*/
    `<div class="panel-footer">
        <slot/>
      </div>
       `,
  
  methods: {},
  computed: {},
});
