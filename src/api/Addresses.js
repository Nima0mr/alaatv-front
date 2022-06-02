import process from 'process'
// process.client or process.browser
const alaaServer = process.env.ALAA_API
const API_ADDRESS = {
  // socket: process.env.VUE_APP_SOCKET_TARGET_API_SERVER,
  socket: 'https://office.alaatv.com:501',
  pages: {
    home: alaaServer + '/home'
  },
  server: {
    auth: alaaServer
  },
  auth: {
    login: alaaServer + '/login'
  },
  user: {
    base: alaaServer + '/user',
    mobile: {
      resend: alaaServer + '/mobile/resend',
      verify: alaaServer + '/mobile/verify'
    },
    formData: alaaServer + '/megaroute/getUserFormData',
    show_user: alaaServer + '/getUserFor3a'
  },
  content: {
    create: {
      base: '/reqres/api/c'
    },
    edit: {
      base: alaaServer + '/c/'
    },
    index: {
      base: alaaServer + '/admin/c'
    },
    show: {
      base: alaaServer + '/c/'
    }
  },
  coupon: {
    create: {
      base: '/v2/admin/coupon'
    },
    edit: {
      base: ''
    },
    index: {
      base: alaaServer + '/admin/coupon'
    },
    show: {
      base: '/v2/admin/coupon/10'
    }
  },
  order: {
    create: {
      base: '/reqres/api/users'
    },
    edit: {
      base: alaaServer + '/admin/order'
    },
    index: {
      base: alaaServer + '/admin/order'
    },
    show: {
      base: alaaServer + '/admin/order'
    }
  },
  product: {
    create: {
      base: '/reqres/api/users'
    },
    edit: {
      base: alaaServer + '/admin/product'
    },
    index: {
      base: alaaServer + '/admin/product'
    },
    show: {
      base: alaaServer + '/product'
    }
  },
  attributeManagement: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  attributeValue: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  liveDescription: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  Vouchers: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  sets: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  sourceManagement: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  teleMarketing: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  fixUnknownUsersCity: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  section: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  attributeSetManagement: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  transaction: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  userBon: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  smsAdmin: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  coupons: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  gateway: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  activityLog: {
    index: {
      base: alaaServer + '/admin/user'
    }
  },
  tags: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  blockManagement: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  ticketDepartment: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  ticket: {
    create: {
      base: alaaServer + '/ticket'
    },
    edit: {
      base: alaaServer + '/ticket/'
    },
    index: {
      base: alaaServer + '/ticket'
    },
    show: {
      base: alaaServer + '/ticket/'
    }
  },
  slideShowManagement: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  users: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  },
  permission: {
    create: {
      base: alaaServer + '/admin/user'
    },
    edit: {
      base: alaaServer + '/admin/user/'
    },
    index: {
      base: alaaServer + '/admin/user'
    },
    show: {
      base: alaaServer + '/admin/user/'
    }
  }
}
export default API_ADDRESS
