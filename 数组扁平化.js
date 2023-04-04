// 将嵌套路由扁平化
const testCase = [
  {
    path: '/jobs',
    routes: [
      {
        path: '/auto_create'
      },
      {
        path: '/:jobId',
        routes: [
          {
            path: '/info'
          },
          {
            path: '/source'
          },
          {
            path: '/smart_recruitment'
          },
          {
            path: '/satisfaction',
            routes: [
              {
                path: [
                  '/pandect/:candidateId',
                  '/application/:applicationId',
                  '/:id'
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// 得到结果
// [
//   '/jobs/auto_create',
//   '/jobs/:jobId/info',
//   '/jobs/:jobId/source',
//   '/jobs/:jobId/smart_recruitment',
//   '/jobs/:jobId/satisfaction/pandect/:candidateId',
//   '/jobs/:jobId/satisfaction/application/:applicationId',
//   '/jobs/:jobId/satisfaction/:id',
// ];

/**
 * @param {array} data
 * @return {array}
 */
const flattenRoutes = (data = []) => {
  // TODO
  const getPaths = (prefix, routes) =>
    routes.map((it) => {
      if (it.routes) {
        return getPaths(`${prefix}${it.path}`, it.routes).reduce(
          (ret, it) => ret.concat(it),
          []
        );
      }
      return Object.prototype.toString.call(it.path) === '[object Array]'
        ? it.path.map((p) => `${prefix}${p}`)
        : [`${prefix}${it.path}`];
    });

  return getPaths('', data).reduce((ret, it) => ret.concat(it), []);
};

console.log(flattenRoutes(testCase));
