var username = new Vue({
  el: '#login_info',
  data: {
    username: 'John Doe',
    branchname: 'SMI Singapore'
  }
})

var menuitems = new Vue({
  el: '#horizontal_menu',
  data: {
    maintenance_items: [
      'Holidays',
      'Manual Messages',
      'Participant',
      'Bulking Group',
      'Resend Request',
      'CSD Account Mapping'
    ],
    applications_items: [
      'Singapore Views', 
      'Auto Allocation',
      'Commit Report',
      'Commit Report Bulking',
      'Trade Bulking'
    ]
  }
})