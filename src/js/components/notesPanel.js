app.component("notesPanel", {
  props: {
    notes: {
      type: Object,
      required: true,
    },
  },
  template:
    /*html*/
    ` 
      <panel-box type="default" >
        <panel-Header> 
            <div   id="note-form" > 
                <textarea  name="content" id="note-content" placeholder="Type your message here..." class="form-control input-sm" style="margin-bottom: 5px;"></textarea>
                <div  class="input-group"> 
                    <div :class="showNoteTypeMenu ? 'open' : ''" class="input-group-btn"><button  type="button" data-toggle="dropdown" class="btn btn-default btn-sm dropdown-toggle">
                        <span  id="note_type" @click="toggalNodeTypeMenu">
                        {{currentType}}
                        </span>
                        </button>
                            <ul id="note-types" class="dropdown-menu slidedown" >
                                <li v-for="type in notes.noteTypes"  href="#" @click.stop="chnageType(type.text)" >
                                <i class="fa fa-chevron-circle-right fa-fw" :class="'fa-chevron-'+type.icon" ></i> 
                                    {{type.text}} 
                                </li>
                            </ul>
                        <span  v-on:click="addNote" class="pull-right"><button  class="btn btn-warning btn-sm">
                                Add note
                                <i  class="fa fa-paper-plane-o fa-fw fa-lg"></i></button>
                            <a  id="importantNotesButton" class="btn btn-default btn-sm" style="margin-left: 5px;"><span  class="fa fa-exclamation-circle fa-fw fa-lg"></span></a></span>
                    </div>
                </div>
            </div>

         </panel-Header>
            <div  class="notes-panel panel panel-default">
                <div  class="panel-body">
                    <ul  class="chat">
                        <li  v-for="note in notes.list"  class="clearfix">
                            <div  class="chat-body clearfix">
                                <div  class="header"><i  class="fa fa-pencil fa-fw"></i> <strong  class="primary-font">{{note.user}}
                                </strong> <small  class="pull-right text-muted">
                                        {{note.date}} <i  class="fa fa-clock-o fa-fw"></i> <span  class="fa fa-exclamation-circle fa-fw fa-lg" style="cursor: pointer;"></span>
                                        </small></div>
                                <p>    
                                      <span  class="label label-primary">{{note.type}}</span> <span Pending outsourcing status>
                                        {{note.text}}</span>
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
      </panel-box>
      
        
              
          
           `,
  data() {
    return {
        showNoteTypeMenu: false,
        currentType:'Generic'
    };
  },
  // setup(p){ debugger;},
  methods: {
    toggalNodeTypeMenu:function(){
        this.showNoteTypeMenu=!this.showNoteTypeMenu;
    },
    addNote:function(){
        alert('a');
    },
    chnageType:function(type){
        this.currentType = type;
        this.toggalNodeTypeMenu();

    }
  },
  computed: {},
});
