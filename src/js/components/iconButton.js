app.component("iconButton", {
  props: {
    text: {
      type: String,
    },
    href: {
      type: String,
    },
    icon: {
      type: String,
    },
    btntype: {
      type: String,
    },
  },
  template:
    /*html*/
    ` 
         <button style="margin-left:5px; margin-right:5px;" class="btn btn-xs" :class="this.btntype !== '' ? 'btn-'+this.btntype : ''"> 
            <template v-if="this.href" >
                <a  :href="href" v-if="this.href!=='' " :class="this.btntype !== '' ? 'btn-'+this.btntype : ''">
                    <i 
                        class="fa fa-fw fa-lg" 
                        :class="'fa-'+this.icon"></i>
                    {{this.text}}
                    <slot/>
                </a>
            </template>
            <template v-else>
                <i 
                    class="fa fa-fw fa-lg" 
                    :class="'fa-'+this.icon"></i>
                {{this.text}}
                <slot/>
            </template>
         </button>
         `,
});

app.component("iconButtonList", {
  props: {
    btnList: {
      typeof: Array,
      required: true,
    },
  },
  template:
  /*html*/
  `
    <template v-for="btn in btnList">
        <icon-button :icon="btn.icon" :href="btn.href" :btntype="btn.btntype" :text="btn.text"  />
    </template>
  `,
});
