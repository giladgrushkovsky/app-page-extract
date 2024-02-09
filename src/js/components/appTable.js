app.component("app-table", {
  props: {
    rows: {
      type: Object,
      required: false,
    },
  },
  template:
    /*html*/
    `
    <div class="table-responsive">
       <table  class="table table-striped table-condensed table-bordered table-hover ">
        <slot/>
       </table>
    </div>
    `,

  methods: {},
  computed: {},
});

// app.component("app-table-haeder", {
//   props: {
//     rows: {
//       type: Object,
//       required: true,
//     },
//   },
//   template:
//     /*html*/
//     `
//        <table style="table-layout: fixed;" class="table table-striped table-condensed table-bordered table-hover ">
//         <slot/>
//        </table>
//     `,

//   methods: {},
//   computed: {},
// });
