var username = new Vue({
  el: '#login_info',
  data: {
    username: 'John Doe',
    branchname: 'SMI Singapore'
  }
})

var activetabs = new Vue({
  el: '#active_tabs',
  data: {
    tabs: [
      'Holidays',
      'Manual Messages'
    ],
  }
})

var tab = new Vue({
  el: '#manual_message_tab_content',
  data: {
    name: '',
    filters: [
      {
        name: 'Participant ID',
        type: 'text'
      },
      {
        name: 'MessageType',
        type: 'text'
      },
      {
        name: 'Sender Reference',
        type: 'text'
      },
      {
        name: 'Message Text',
        type: 'text'
      },
      {
        name: 'Status',
        type: 'text'
      },
    ]
  }
})

Vue.component('main-menu-bar', {
  data: function () {
    return {
      count: 0
    }
  },
  props: {
    menuItems: Array,
  },
  template: `
    <ul>
      <li class="dropdown" v-for="menuItem in menuItems">
        <button class="dropbtn">{{ menuItem.name }}</button>
        <ul class="dropdown-content">
          <li>
            <a href="#" v-for="subItem in menuItem.subItems">{{ subItem }}</a>
          </li>
        </ul>
      </li>
    </ul>
  `
})

var mainMenu = new Vue({
  el: '#main-menu',
  data: {
    menuItems: [
      {
        name: 'Files',
        subItems: ['User Settings', 'Exit']
      },
      {
        name: 'Edit',
        subItems: ['Cut', 'Copy', 'Paste']
      },
      {
        name: 'Maintenance',
        subItems: [
          'Hollidays', 
          'Manual Messages', 
          'Participant', 
          'Bulking Group',
          'Resend Request',
          'CSD Account Mapping'
        ]
      },
      {
        name: 'Applications',
        subItems: [
          'Singapore Views',
          'Auto Allocation',
          'Commit Report',
          'Commit Report Bulking',
          'Trade Bulking'
        ]
      },
      {
        name: 'Help',
        subItems: ['About']
      },
    ]
  }
})

// register the grid component
Vue.component('demo-grid', {
  template: '#grid-template',
  props: {
    data: Array,
    columns: Array,
    filterKey: String
  },
  data: function () {
    var sortOrders = {}
    this.columns.forEach(function (key) {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders: sortOrders
    }
  },
  computed: {
    filteredData: function () {
      var sortKey = this.sortKey
      var filterKey = this.filterKey && this.filterKey.toLowerCase()
      var order = this.sortOrders[sortKey] || 1
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      if (sortKey) {
        data = data.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * order
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    sortBy: function (key) {
      this.sortKey = key
      this.sortOrders[key] = this.sortOrders[key] * -1
    }
  }
})

// bootstrap the demo
var demo = new Vue({
  el: '#demo',
  data: {
    searchQuery: '',
    gridColumns: ['name', 'power'],
    gridData: [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
  }
})
