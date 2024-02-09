const data = {
  loadnDetail: {
    general: new loadGeneralData({
      date: new Date(),
      refNumber: 1234,
      status: "Approved",
      currency: "£",
      currncyId: "GBP",
      applied: 400,
      approved: 400,
      instalments: 6,
      nextPayDate: new Date(),
      followingPaydate: new Date(),
      netPay: 1400,
      partnersIncom: 0,
      ipAddress: "192.168.2.1",
      loanPurpose: "Subsistence",
      allowMarjeting: true,
      allowThiriedPartyContact: false,
    }),
    presonalDetails: {
      fullName: "test name",
      age: 44,
      residentialSratus: "Owner",
      dependants: 3,
      mobile: "44112233112",
      home: "445588776",
      email: "test@test.test",
      addresses: [
        {
          addressId: "11223344",
          address: "Leora Dale, Lueilwitzmouth, Togo",
          current: true,
        },
        {
          addressId: "1123344",
          address: "Leora Dale, Lueilwitzmouth",
          current: false,
        },
        {
          addressId: "112344",
          address: "Leora Dale, there, Togo",
          current: false,
        },
        {
          addressId: "11223354",
          address: "Leora Dale, here, Togo",
          current: false,
        },
      ],
    },
    workDetail: {
      phone: "44998876557",
      email: "ttt@bbb.com",
      term: "full tike",
      paymentFrequenct: "weekly",
      employer: "emp name",
      jobTitile: "j title",
      department: "testing",
      timeAtJojb: "33",
      Industry: "Industry test",
    },
  },
  applicationMatches: [
    {
      status: "approved",
      name: "John Doe",
      idNumber: "123456",
      email: "john.doe@example.com",
      date: "2024-02-08",
      href: "",
    },
    {
      status: "decline",
      name: "Alice Smith",
      idNumber: "654321",
      email: "alice.smith@example.com",
      date: "2024-02-07",
      href: "",
    },
    {
      status: "approved",
      name: "Bob Johnson",
      idNumber: "987654",
      email: "bob.johnson@example.com",
      date: "2024-02-06",
      href: "",
    },
    {
      status: "decline",
      name: "Emily Brown",
      idNumber: "456789",
      email: "emily.brown@example.com",
      date: "2024-02-05",
      href: "",
    },
    {
      status: "approved",
      name: "Michael Wilson",
      idNumber: "321654",
      email: "michael.wilson@example.com",
      date: "2024-02-04",
      href: "",
    },
    {
      status: "decline",
      name: "Sophia Lee",
      idNumber: "789456",
      email: "sophia.lee@example.com",
      date: "2024-02-03",
      href: "",
    },
    {
      status: "approved",
      name: "William Taylor",
      idNumber: "654987",
      email: "william.taylor@example.com",
      date: "2024-02-02",
      href: "",
    },
    {
      status: "decline",
      name: "Olivia Martinez",
      idNumber: "987123",
      email: "olivia.martinez@example.com",
      date: "2024-02-01",
      href: "",
    },
    {
      status: "approved",
      name: "James Anderson",
      idNumber: "456123",
      email: "james.anderson@example.com",
      date: "2024-01-31",
      href: "",
    },
    {
      status: "decline",
      name: "Emma Garcia",
      idNumber: "123789",
      email: "emma.garcia@example.com",
      date: "2024-01-30",
      href: "",
    },
  ],
  customerMatches: [
    {
      name: "John Doe",
      id: "JDL2345",
      address: "10 Downing Street, London, SW1A 2AA",
      href: "",
    },
    {
      name: "Alice Smith",
      id: "ASR8765",
      address: "20 Baker Street, Manchester, M1 2NE",
      href: "",
    },
    {
      name: "Bob Johnson",
      id: "BJH1234",
      address: "30 Oxford Street, Birmingham, B1 1BB",
      href: "",
    },
    {
      name: "Emily Brown",
      id: "EBS5678",
      address: "40 Bond Street, Leeds, LS1 2AP",
      href: "",
    },
    {
      name: "Michael Wilson",
      id: "MWQ9876",
      address: "50 Park Lane, Glasgow, G1 3QW",
      href: "",
    },
    {
      name: "Sophia Lee",
      id: "SLP3456",
      address: "60 Regent Street, Edinburgh, EH1 3AB",
      href: "",
    },
    {
      name: "William Taylor",
      id: "WTP6789",
      address: "70 High Street, Cardiff, CF1 4DE",
      href: "",
    },
    {
      name: "Olivia Martinez",
      id: "OMN8901",
      address: "80 Queen Street, Belfast, BT1 6ET",
      href: "",
    },
    {
      name: "James Anderson",
      id: "JAS2345",
      address: "90 Victoria Street, Bristol, BS1 5HE",
      href: "",
    },
    {
      name: "Emma Garcia",
      id: "EGH5678",
      address: "100 King Street, Liverpool, L1 8JQ,",
      href: "",
    },
  ],
  alerts: [
    {
      text: "History of Bankruptcy found on customer Credit Report. Please review before proceeding!",
    },
    { text: "test message" },
  ],
  validation: [
    {
      text: "Return Customer Validation",
    },
    {
      text: "Compliance Validation",
      details: [
        {
          error: true,
          worning: false,
          text: "Applications require a recent credit check (within 7 days).",
          action: {
            text: " Run CRA",
            event: {},
            icon: "paper-plane",
            btntype: "info",
          },
        },
        {
          error: true,
          worning: false,
          text: "Cannot approve an application with Subsistence loan purpose. See Policy 8.5.",
        },
        {
          error: true,
          worning: false,
          text: "Customer has another application in process. Please cancel other applications before Checking.",
        },
      ],
    },
    {
      text: "Affordability Validation",
      details: [
        {
          error: true,
          worning: false,
          text: "Failed Affordability. Repayments must comply with NDI rule [65% of NDI]",
        },
        {
          error: false,
          worning: true,
          text: "Income not verified. Please verify the customers income.",
        },
      ],
    },
    {
      text: "Return Customer Validation",
      details: [{ error: false, worning: true, text: "" }],
    },
    {
        text: "Info Request Validation",
      },
  ],
  notes:{
    list:[
    {user: "Alice", text: "Great job!", date: "2024-02-08T10:15:30", type: "positive"},
    {user: "Bob", text: "Interesting stuff!", date: "2024-02-07T12:30:45", type: "neutral"},
    {user: "Charlie", text: "I disagree.", date: "2024-02-06T15:45:20", type: "negative"},
    {user: "David", text: "Well done!", date: "2024-02-05T09:20:10", type: "positive"},
    {user: "Emma", text: "I love it!", date: "2024-02-04T14:10:05", type: "positive"},
    {user: "Frank", text: "Could be better.", date: "2024-02-03T16:55:30", type: "neutral"},
    {user: "Grace", text: "Impressive work.", date: "2024-02-02T11:40:25", type: "positive"},
    {user: "Hannah", text: "I'm not sure about this.", date: "2024-02-01T13:05:15", type: "neutral"},
    {user: "Ian", text: "This needs improvement.", date: "2024-01-31T08:25:40", type: "negative"},
    {user: "Julia", text: "I'm impressed!", date: "2024-01-30T17:30:55", type: "positive"}
    ],
    noteTypes:[
        {text: 'Generic' , icon: 'circle-right'},
        {text: 'Loan Details' , icon: 'circle-right'},
        {text: 'Payment' , icon: 'circle-right'},
        {text: 'Court' , icon: 'circle-right'},
        {text: 'Charge Back' , icon: 'circle-right'},
        {text: 'Complaint' , icon: 'circle-right'},
        
      ]
  },
  
  
};

const app = Vue.createApp({
  data() {
    return data;
  },    
  methods: {
    test1() {
      alert("a");
    },
  },
});
