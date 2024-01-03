export default {
    // 在测试中自动模拟所有导入的模块
    // automock: false,

    // 在 `n` 次失败后停止运行测试
    // bail: 0,

    // Jest 存储其缓存的依赖信息的目录
    // cacheDirectory: "/private/var/folders/hj/q904n9ns3cg8lwh4ybcts5ch0000gn/T/jest_dx",

    // 在每次测试之前自动清除模拟调用、实例和结果
    clearMocks: true,

    // 指示是否在执行测试时应该收集覆盖率信息
    collectCoverage: true,

    // 一组用于指定应该收集覆盖率信息的文件的 glob 模式数组
    // collectCoverageFrom: undefined,

    // Jest 应该输出覆盖率文件的目录
    coverageDirectory: "coverage",

    // 一组用于跳过覆盖率收集的正则表达式模式字符串
    coveragePathIgnorePatterns: ["/node_modules/"],

    // 指示应该使用哪个提供程序来为覆盖率结果编写报告
    coverageProvider: "v8",

    // Jest 写覆盖率报告时要使用的一组报告器名称
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],

    // 配置覆盖率结果的最低阈值执行
    // coverageThreshold: undefined,

    // 自定义依赖项提取器的路径
    // dependencyExtractor: undefined,

    // 在调用弃用的 API 时引发有用的错误消息
    // errorOnDeprecated: false,

    // 使用 glob 模式的数组来强制覆盖收集从被忽略的文件中
    // forceCoverageMatch: [],

    // 用于在所有测试套件之前触发的异步函数的路径
    // globalSetup: undefined,

    // 用于在所有测试套件之后触发的异步函数的路径
    // globalTeardown: undefined,

    // 一组需要在所有测试环境中可用的全局变量
    // globals: {},

    // 用于运行测试的最大工作线程数量。可以指定为％或数字。例如，maxWorkers: "10%" 将使用您的 CPU 数量的 10% + 1 作为最大工作线程数。maxWorkers: 2 将使用最多 2 个工作线程。
    // maxWorkers: "50%",

    // 递归从导入模块的位置向上搜索的目录名称数组
    // moduleDirectories: [
    //   "node_modules"
    // ],

    // 您的模块使用的文件扩展名的数组
    // moduleFileExtensions: [
    //   "js",
    //   "jsx",
    //   "ts",
    //   "tsx",
    //   "json",
    //   "node"
    // ],

    // 正则表达式到模块名称或模块名称数组的映射，允许使用单个模块来模拟资源
    // moduleNameMapper: {},

    // 匹配所有模块路径之前的模块加载器之前的一组正则表达式模式字符串
    // modulePathIgnorePatterns: [],

    // 激活测试结果通知
    // notify: false,

    // 指定通知模式的枚举。需要 { notify: true }
    // notifyMode: "failure-change",

    // 作为 Jest 配置的基础使用的预设
    preset: "ts-jest",

    // 从一个或多个项目运行测试
    // projects: undefined,

    // 使用此配置选项添加自定义报告程序到 Jest
    // reporters: undefined,

    // 在每次测试之前自动重置模拟状态
    // resetMocks: false,

    // 在运行每个单独测试之前重置模块注册表
    // resetModules: false,

    // 自定义解析器的路径
    // resolver: undefined,

    // 在每次测试之前自动还原模拟状态和实现
    // restoreMocks: false,

    // Jest 应该扫描测试和模块的根目录
    // rootDir: undefined,

    // 用于在其中搜索文件的目录路径列表，Jest 应该使用这些目录来搜索文件
    roots: [
        "./"
    ],

    // 允许您使用自定义运行器来代替 Jest 的默认测试运行器
    // runner: "jest-runner",

    // 一组模块路径，这些模块运行一些代码来在每个测试之前配置或设置测试环境
    // setupFiles: [],

    // 一组模块路径，这些模块运行一些代码来在每个测试之前配置或设置测试框架
    // setupFilesAfterEnv: [],

    // 测试被认为是缓慢并在结果中报告为此的秒数
    // slowTestThreshold: 5,

    // 一组用于快照测试的模块路径
    // snapshotSerializers: [],

    // 用于测试的测试环境
    testEnvironment: "jsdom",

    // 将传递给 testEnvironment 的选项
    // testEnvironmentOptions: {},

    // 在测试结果中添加一个位置字段
    // testLocationInResults: false,

    // Jest 用于检测测试文件的 glob 模式
    testMatch: [
        "**/__tests__/**/*.[jt]s?(x)",
        "**/?(*.)+(spec|test).[tj]s?(x)",
    ],

    // 一组正则表达式模式字符串，匹配所有模块路径之前的所有模块路径，匹配的测试将被跳过
    // testPathIgnorePatterns: [
    //   "/node_modules/"
    // ],

    // Jest 用于检测测试文件的正则表达式模式或模式数组
    // testRegex: [],

    // 此选项允许使用自定义结果处理器
    // testResultsProcessor: undefined,

    // 此选项允许使用自定义测试运行器
    // testRunner: "jest-circus/runner",

    // 此选项设置 jsdom 环境的 URL。它在属性如 location.href 中反映
    // testURL: "http://localhost",

    // 将此值设置为 "fake" 允许使用伪计时器，例如 "setTimeout" 函数
    // timers: "real",

    // 从正则表达式到转换器路径的映射的数组
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },

    // 一组正则表达式模式字符串，匹配所有源文件路径之前的所有源文件路径，匹配的文件将跳过转换
    transformIgnorePatterns: ["/node_modules/", "\\.pnp\\.[^\\/]+$"],

    // 一组正则表达式模式字符串，匹配所有模块之前的模块路径，模拟资源将返回单个模块
    // unmockedModulePathPatterns: undefined,

    // 指示是否应在运行期间报告每个单独的测试
    // verbose: undefined,

    // 一组正则表达式模式，匹配所有源文件路径之前，重新运行观看模式下的测试
    // watchPathIgnorePatterns: [],

    // 是否使用 watchman 进行文件爬行
    // watchman: true,
};
