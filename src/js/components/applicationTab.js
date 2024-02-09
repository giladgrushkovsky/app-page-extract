app.component("applicationTab", {
  props: {
    general: {
      type: loadGeneralData,
    },
    personal: {
      type: Object,
    },
    work: {
        typeof:Object
    },
    'customer-matches':{
        type:Object,
    },
    'application-Matches':{
        type:Object,
    },
    alerts:{
        type:Object,
    },
    validation:{
        type:Object,
    },
    notes:{
        type:Object,
    },
  },
  template:
    /*html*/
    `
    
    <div class="row">
        <div class="col-lg-6">
            <panel-box type="primary">
                <panel-header>
                    <div class="bold pull-left" > 
                       {{getDisplayDate( general.date)}}, {{getTime(general.date)}} - Ref: {{general.refNumber}}    
                        
                    </div>
                    <div class="bold text-right">
                        <icon-button onclick="reminder('Application', '368', 'Mrs Icie Pfannerstill');" 
                        btntype="info"  icon="bell">  </icon-button> 
                        &nbsp;

                        <span id="appStatus" style="position: relative">
                            <span onclick="toggleStatusLog()" style="cursor: pointer;">
                                {{general.status}} 
                            </span>
                            <table class="table table-bordered table-condensed" id="statusLogs"
                                style="display: none;box-shadow: 5px 10px 10px #888888; text-align:left; min-width: 400px;z-index:10000; position: absolute;top:20px;left:0;background: white;color:black;">
                                <thead>
                                    <tr style="background: black; color:white">
                                        <th>Status</th>
                                        <th>User</th>
                                        <th>Timestamp</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>New</td>
                                        <td>Admin Bot</td>
                                        <td>12-11-2023 10:15:37</td>
                                    </tr>
                                </tbody>

                            </table>
                        </span>
                        | Loan Date: {{getDisplayDate(general.date)}}


                        <icon-button :style="{backgroundColor:'transparent', color:'white' }" btntype="info" href="https://evergreen-l10.ddev.site/applications/edit/368" icon="pencil">   </icon-button><br/>
                        <!--<a href="https://evergreen-l10.ddev.site/applications/edit/368"
                            style="color: white;">
                            <i class="fa fa-pencil-square-o fa-lg fa-fw"></i>
                        </a> -->
                    </div>
                    
                </panel-header>

                <app-table>
                    <thead>
                        <tr>
                        <th class="text-primary" colspan="4">
                            General
                            <span class="pull-right">
                            <icon-button text="Current" btntype="danger" icon="user" />
                            </span>
                        </th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>Applied</th>
                        <td>{{general.currency}}{{general.applied}}</td>
                        <th>Approved</th>
                        <td>{{general.currency}}{{general.approved}}</td>
                    </tr>
                    <tr>
                        <th>Instalments</th>
                        <td>{{general.instalments}}</td>
                        <th>Instalments</th>
                        <td>4</td>
                    </tr>
                    <tr>
                        <th>Next Paydate</th>
                        <td>{{getDisplayDate(general.nextPayDate)}}</td>
                        <th>Following Paydate</th>
                        <td>{{getDisplayDate(general.followingPaydate)}}</td>
                    </tr>
                    <tr>
                        <th>Net Pay</th>
                        <td>{{formatCurrency(general.netPay,general.currncyId)}}</td>
                        <th>Partners Income</th>
                        <td>{{formatCurrency(general.partnersIncom,general.currncyId)}}</td>
                    </tr>
                    <tr>
                        <th>IP Address</th>
                        <td><span class="highlight highlight-ip_address" style="background-color: lightblue;">{{general.ipAddress}}</span>
                        </td>
                        <th>Loan Purpose</th>
                        <td>
                            <icon-button btntype="danger" icon="warning"  /> {{general.loanPurpose}}
                            
                        </td>
                    </tr>
                    <tr>

                        <th>Allow Marketing</th>
                        <td>
                            <i v-if="!general.allowMarjeting" class="fa fa-lg fa-times text-danger"></i>
                            <i v-else class="fa fa-lg fa-check text-success"></i>
                        </td>
                        <th>Allow 3rd Party Contact</th>
                        <td>
                        <i v-if="!general.allowThiriedPartyContact" class="fa fa-lg fa-times text-danger"></i>
                        <i v-else class="fa fa-lg fa-check text-success"></i>
                        </td>
                    </tr>

                    <template v-if="personal" >
                    <tr class="text-primary">
                        <th colspan="4">Personal Details</th>
                    </tr>
                    <tr>
                        <th>Full Name</th>
                        <td>
                            <a href="https://evergreen-l10.ddev.site/customers/view/239"> {{personal.fullName}} </a>
                            <icon-button text="Unlink" icon="unlock-alt" btntype="info" onclick="customer_unlink(239);return false;"/>
                            
                        </td>
                        <th>Age</th>
                        <td>{{personal.age}}</td>
                    </tr>
                    <tr>
                        <th>Residential Status</th>
                        <td>{{personal.residentialSratus}}</td>
                        <th>Dependants</th>
                        <td>{{personal.dependants}}</td>
                    </tr>
                    <tr>
                        <th>Mobile</th>
                        <td>
                            <input type="text" id="editable_mobile" style="display: none;">
                            <span id="display_mobile">
                                <a href="tel:+{{personal.mobile}}">+<span class="highlight highlight-phone_home" style="background-color: rgb(221, 221, 0);"><span class="highlight highlight-work_phone" style="background-color: rgb(157, 170, 193);"><span class="highlight highlight-phone_mobile" style="background-color: rgb(253, 166, 120);">{{personal.mobile}}</span></span></span></a>
                                <a href="https://app.frontapp.com/compose?mailto=mailto:%2B{{personal.mobile}}" onclick="return !window.open(this.href, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=450,width=650,height=530')"><i class="fa fa-fw fa-commenting-o"></i></a>
                            </span>
                            <i class="fa fa-fw fa-edit" id="edit_mobile_btn" onclick="editMobile('{{personal.mobile}}')"></i>
                            <i class="fa fa-fw fa-save" id="save_mobile_btn" style="display:none;" onclick="saveMobile()"></i>

                        </td>
                        <th>Home Phone</th>
                        <td><a href="tel:+{{personal.mobile}}">+<span class="highlight highlight-phone_home" style="background-color: rgb(221, 221, 0);"><span class="highlight highlight-work_phone" style="background-color: rgb(157, 170, 193);"><span class="highlight highlight-phone_mobile" style="background-color: rgb(253, 166, 120);">{{personal.mobile}}</span></span></span></a>
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input type="text" id="editable_email" style="display: none;">
                            <span id="display_email">
                                <span class="highlight highlight-email" style="background-color: rgb(221, 153, 0);"><span class="highlight highlight-work_email" style="background-color: rgb(255, 153, 0);">{{personal.email}}</span></span>
                                <a href="https://app.frontapp.com/compose?mailto=mailto:{{personal.email}}&amp;subject=Your application &amp;body=Hi Icie,<br><br> Thank you for your application." onclick="return !window.open(this.href, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=450,width=650,height=530')"><i class="fa fa-fw fa-envelope-o"></i></a>
                            </span>
                            <i class="fa fa-fw fa-search" onclick="jsonDomainLookup('{{personal.email}}'.replace(/.*@/, ''))"></i>
                            <i class="fa fa-fw fa-edit" id="edit_email_btn" onclick="editEmail('{{personal.email}}')"></i>
                            <i class="fa fa-fw fa-save" id="save_email_btn" style="display:none;" onclick="saveEmail()"></i>

                        </td>
                    </tr>
                    </template>

                    <template v-if="personal && personal.addresses" >
                    <tr class="text-primary">
                            <th colspan="3">Addresses</th>
                            <th class="text-center">Current</th>
                    </tr>
                    <tr v-for="address in personal.addresses">
                        <th>
                            <span class="highlight highlight-postcode" style="background-color: rgb(153, 153, 255);">{{address.addressId}}</span>
                        </th>
                        <td colspan="2">
                            {{address.address}}
                        </td>
                        <td class="text-center">
                        <i v-if="address.current" class="fa fa-lg fa-check text-success"></i>
                        </td>
                    </tr>
                    </template>

                    <template v-if="work" >
                    
                    <tr>
                        <th class="text-primary" colspan="4">Work Details}</th>
                    </tr>
                    <tr>
                        <th>Phone - Work</th>
                        <td>
                            <a href="tel:+{{work.phone}}">+<span class="highlight highlight-phone_home" style="background-color: rgb(221, 221, 0);"><span class="highlight highlight-work_phone" style="background-color: rgb(157, 170, 193);"><span class="highlight highlight-phone_mobile" style="background-color: rgb(253, 166, 120);">{{work.phone}}</span></span></span></a>
                            <a target="_blank" href="https://www.google.co.uk/search?q=07824330198&amp;gws_rd=ssl">
                                <i class="fa fa-lg fa-fw fa-google"></i>
                            </a>
                        </td>
                        <th>Work Email</th>
                        <td>
                            <span class="highlight highlight-email" style="background-color: rgb(221, 153, 0);"><span class="highlight highlight-work_email" style="background-color: rgb(255, 153, 0);">jones.cleta@gmail.com</span></span>
                            <a href="https://app.frontapp.com/compose?mailto=mailto:jones.cleta@gmail.com" onclick="return !window.open(this.href, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=450,width=650,height=530')"><i class="fa fa-fw fa-envelope-o"></i></a>
                            <i class="fa fa-fw fa-search" onclick="jsonDomainLookup('jones.cleta@gmail.com'.replace(/.*@/, ''))"></i>
                        </td>
                    </tr>
                    <tr>
                        <th>Term</th>
                        <td>{{work.term}}</td>
                        <th>Payment Frequency</th>
                        <td>{{work.paymentFrequenct}}
                        </td>
                    </tr>
                    <tr>
                        <th>Employer</th>
                        <td>
                            {{work.employer}}
                            <icon-button icon="google" href="https://www.google.co.uk/search?q={{work.employer}}&amp;gws_rd=ssl"/>
                        </td>
                        <th>Job Title</th>
                        <td>{{work.jobTitile}}</td>
                    </tr>
                    <tr>
                        <th>Department</th>
                        <td>{{work.department}}</td>
                        <th>Time at Job</th>
                        <td>{{getTimeAtWork(work.timeAtJojb)}}</td>
                    </tr>
                    <tr>
                        <th>Employment Industry</th>
                        <td>
                            {{work.Industry}}
                        </td>
                    </tr>
                    </template>
                </tbody>
                </app-table>

                <panel-fotter>
                    <div class="row">
                        <icon-button-list :btnList="getActionButtons()" />
                    </div>
                
                </panel-fotter>
                
            </panel-box>
            <customer-matches :rows="customerMatches" pageSize=4> </customer-matches>
            <application-matches :rows="applicationMatches"> </application-matches>

        </div>

        <div class="col-lg-6" id="affordability">
            <div class="vue-instance">
                <div data-v-cdbde46a="">
                    <div data-v-cdbde46a="">
                        <div data-v-cdbde46a="" id="tags-field" class="form-control "> <span data-v-cdbde46a="" id="palace-holder">Select tags...</span>
                            <div data-v-cdbde46a="" id="showIcon" class="pull-right" style="padding-right: 3px;"><span data-v-cdbde46a="" style="display: none;"><i data-v-cdbde46a="" class=" ckspin fa fa-fw fa-spinner fa-spin fa-lg"></i></span>
                                <span data-v-cdbde46a="" style="color: rgb(62, 143, 62); display: none;"><i data-v-cdbde46a="" class="glyphicon glyphicon-ok"></i></span> <span data-v-cdbde46a="" style="color: red; display: none;"><i data-v-cdbde46a="" class="glyphicon glyphicon-remove"></i></span></div>
                        </div>
                    </div> <!---->
                </div>
            </div>
            <alerts-list :rows="alerts" > </alerts-list>

            <div class="table-responsive" style="overflow-x:visible;">
                <table class="table table-condensed table-bordered table-striped">
                    <tbody>
                        <tr class="text-success" style="font-size: 16px;">
                            <th class="col-md-2">
                                <span>
                                    Income:
                                </span>
                            </th>
                            <th>
                                £8,000.00
                                <span class="small">
                                    Unverified
                                </span>
                            </th>
                            <th class="col-md-2">
                                Expenses:
                            </th>
                            <th>
                                £1,136.00
                            </th>
                            <th class="col-md-2">
                                NDI:
                            </th>
                            <th class="">
                                £111.25
                                <span class="small">
                                    Weekly
                                </span>
                            </th>
                        </tr>
                        <tr>
                            <th class="col-md-1">
                                User:
                            </th>
                            <td>
                                £766.00
                            </td>
                            <th class="col-md-1">
                                CRA:
                            </th>
                            <td>
                                £1,136.00
                            </td>
                            <th class="col-md-1">
                                Threshold:
                            </th>
                            <td>
                                £850.00
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h5>Credit Variables</h5>
            <table class="table table-condensed table-striped table-bordered table-hover">
                <tbody>
                    <tr>
                        <th>
                            Passes Credit Score
                        </th>
                        <td>
                            <strong class="text-success">
                                <i class="fa fa-check text-success fa-lg fa-fw "></i>
                                <span class="small">
                                    585
                                    |
                                    537
                                </span>
                                <i class="fa text-success fa-question-circle fa-fw fa- infotip " title="" data-original-title="Compound credit score result."></i>
                            </strong>
                        </td>

                        <th>TAC</th>
                        <td>
                        </td>
                    </tr>

                    <tr>
                        <th>Not Insolvent</th>
                        <td>
                            <i class="fa fa-check text-success fa-lg fa-fw "></i>
                        </td>
                        <th>No CCJ last 12 Mnts</th>
                        <td>
                            <i class="fa fa-check text-success fa-lg fa-fw "></i>
                        </td>
                    </tr>

                    <tr>
                        <th>Total Active Accounts</th>
                        <td>9</td>

                        <th>HCSTC [0 to 3]</th>
                        <td class="">
                            <span class="">Taken: <span class="text-success bold">0</span> | </span>
                            Gone Bad: <span class="text-danger bold">0</span>
                            |
                            <span class="">Outstanding Bad: <span class="text-danger bold">0</span></span>
                        </td>
                    </tr>
                    <tr>
                        <th>Settled / Active Accs. Ratio</th>
                        <td>0.94</td>

                        <th>HCSTC [4 to 6]</th>
                        <td class="">
                            <span class="">Taken: <span class="text-success bold">0</span> | </span>
                            Gone Bad: <span class="text-danger bold">0</span>
                            |
                            <span class="">Outstanding Bad: <span class="text-danger bold">0</span></span>
                        </td>
                    </tr>
                    <tr>
                        <th>Expenses / Income Ratio</th>
                        <td>0.14</td>

                        <th>HCSTC [7 to 12]</th>
                        <td class="">
                            <span class="">Taken: <span class="text-success bold">1</span> | </span>
                            Gone Bad: <span class="text-danger bold">0</span>
                            |
                            <span class="">Outstanding Bad: <span class="text-danger bold">0</span></span>
                        </td>
                    </tr>
                    <tr>
                        <th>Mortgage Holder</th>
                        <td>
                            <i class="fa fa-times fa-lg text-danger">
                            </i>
                        </td>
                        <th>HCSTC Accs last 12 Mnts</th>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>

            
            <validation-panel :validation-data="validation" > </validation-panel>
            <notes-panel :notes="notes"> </notes-panel>

            <div class="" id="compare-frame">
                                    <div class="panel panel-default">
                                        <div class="panel-heading text-left">
                                            <div class="pull-left bold text-primary">
                                                Customer
                                                &gt;
                                                12-11-2023, 10:11
                                            </div>
                                            <div class="text-right bold text-primary">
                                                <a href="#" onclick="customer_link(159);return false;"><i class="fa fa-lock"></i> link</a>
                                                |
                                                <a href="https://evergreen-l10.ddev.site/customers/view/159"><i class="fa fa-eye fa-lg fa-fw"></i></a>
                                            </div>
                                        </div>
                                        <!-- <div class="panel-body">
	</div> -->
                                        <table class="table table-striped table-condensed table-bordered table-hover ">
                                            <tbody>
                                                <tr>
                                                    <th>Customer</th>
                                                    <td><a href="https://evergreen-l10.ddev.site/customers/view/159">Mr
                                                            Terrill Tillman</a></td>
                                                </tr>
                                                <tr>
                                                    <th>DOB</th>
                                                    <td>26-03-2003</td>
                                                </tr>
                                                <tr>
                                                    <th>Address</th>
                                                    <td>9517, Erdman Ferry, Lake Norbertbury, Eritrea</td>
                                                </tr>
                                                <tr>
                                                    <th>Postcode</th>
                                                    <td>42316</td>
                                                </tr>
                                                <tr>
                                                    <th>Mobile Phone</th>
                                                    <td>441897180030 <a href="https://app.frontapp.com/compose?mailto=mailto:%2B441897180030" onclick="return !window.open(this.href, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=450,width=650,height=530')"><i class="fa fa-fw fa-commenting-o"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <th>Home Email</th>
                                                    <td>herzog.edmund@prohaska.com <a href="https://app.frontapp.com/compose?mailto=mailto:herzog.edmund@prohaska.com" onclick="return !window.open(this.href, '_blank', 'toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=450,width=650,height=530')"><i class="fa fa-fw fa-envelope-o"></i></a></td>
                                                </tr>
                                                <tr>
                                                    <th>Frequency</th>
                                                    <td>Second from last working day</td>
                                                </tr>
                                                <tr>
                                                    <th>Net Pay</th>
                                                    <td>£2,200.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
            


        </div>

        
    </div
        
    `,
  methods: {
    getDisplayDate: (date) => {
      const dateDigit = (num) => (num < 10 ? `0${num}` : num);
      return `${dateDigit(date.getDate())}-${dateDigit(
        date.getMonth() + 1
      )}-${date.getFullYear()}`;
    },
    getTime: (date) => {
      return `${date.getHours() + 1}:${
        date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()
      }`;
    },
    formatCurrency: (num, format) => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: format,
      }).format(num);
    },
    getTimeAtWork: (months)=>{
        if(months <= 12){
            return `${months} Months`
        }
        else{
            return `${ parseInt(months / 12)} Years & ${months % 12} Months`;
        }
    },
    getActionButtons: ()=>{
        return [
            {text:'Decision' , icon:'cog' , btntype:'progress'},
            {text:'Decision' , icon:'paper-plane' , btntype:'success'},
            {text:'Decision' , icon:'check-circle' , btntype:'info'},
        ]
    }
  },
  data() {
    return { dataarr: [{ name: "ggg", last: "aaa" }] };
  },
//   setup(p){ debugger;},
});
