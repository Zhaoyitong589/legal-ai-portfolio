export const capabilityOrder = ['legal-support', 'in-house-legal', 'legal-tech', 'cross-border', 'legal-operations'] as const;
export type CapabilityId = typeof capabilityOrder[number];

export const capabilityMap = {
  'legal-support': {
    title: '法律研究与律师支持',
    shortTitle: '法律研究与律师支持',
    position: 'top',
    icon: 'search',
    keywords: '法律检索 · 案例分析 · 争议材料 · 仲裁支持',
    description: '具备法学本科和法律职业资格基础，拥有律所、模拟仲裁及企业合同实践，能够完成法律检索、案例分析、合同审查、材料整理和争议解决支持工作。',
    evidence: ['律所与案件支持', '企业合同实践', '模拟仲裁', '法考 A 证'],
    evidenceIds: ['experience-law-firm', 'cross-border-export', 'experience-moot-arbitration', 'experience-legal-foundation', 'experience-taipei-exchange', 'evidence-organizer', 'time-calculator']
  },
  'in-house-legal': {
    title: '企业法务与合同管理',
    shortTitle: '企业法务与合同管理',
    position: 'right-top',
    icon: 'contract',
    keywords: '商业合同 · 交易条款 · 付款单证 · 风险控制',
    description: '参与制造业企业真实交易和合同管理工作，处理过商业合同、付款条件、发票单证及跨部门协调，能够结合生产、交付和客户需求识别履约风险。',
    evidence: ['变压器企业实践', '中英文合同', '付款与单证', '交易风险控制'],
    evidenceIds: ['cross-border-export', 'risk-screening', 'time-calculator']
  },
  'legal-tech': {
    title: '法律科技与 AI 应用',
    shortTitle: '法律科技与 AI 应用',
    position: 'right-bottom',
    icon: 'nodes',
    keywords: '法律 AI · 产品测试 · 工作流设计 · 用户交付',
    description: '拥有法索 AI 法律科技产品实践经历，参与法律 AI 功能测试、律师工作流拆解、用户手册制作、产品内容表达和用户反馈整理，并能够将真实法律业务需求转化为流程、教程和网页原型。',
    evidence: ['法索 AI 实习', '功能测试', '律师工作流', '用户手册', '需求反馈', '网页原型'],
    evidenceIds: ['experience-fasuo', 'evidence-organizer', 'risk-screening', 'time-calculator']
  },
  'cross-border': {
    title: '涉外法律与跨境业务',
    shortTitle: '涉外法律与跨境业务',
    position: 'left-bottom',
    icon: 'globe',
    keywords: '双语合同 · 跨境交易 · 英文沟通 · 国际视野',
    description: '具备英文法律学习和跨文化沟通经验，并参与真实跨境制造业交易，处理过双语合同、境外客户沟通、国际仲裁条款、付款及单证问题。',
    evidence: ['台北大学交换', '变压器跨境交易', '双语合同', '国际仲裁条款'],
    evidenceIds: ['cross-border-export', 'experience-taipei-exchange', 'experience-moot-arbitration', 'risk-screening']
  },
  'legal-operations': {
    title: '法律运营与项目交付',
    shortTitle: '法律运营与项目交付',
    position: 'left-top',
    icon: 'workflow',
    keywords: 'SOP · 用户手册 · 产品表达 · 项目交付',
    description: '能够将复杂的法律、产品和业务流程整理为用户手册、SOP、产品介绍、培训材料和网页成果，具备从需求拆解到最终交付的完整意识。',
    evidence: ['法索用户手册', '流程与 SOP', '教程与培训', '网页项目成果'],
    evidenceIds: ['experience-fasuo', 'evidence-organizer', 'cross-border-export', 'portfolio-site', 'risk-screening', 'time-calculator']
  }
} as const;

export const experienceEvidence = [
  {
    id: 'experience-fasuo',
    type: '法律科技实践',
    title: '法索 AI｜法律科技产品与运营实习',
    summary: '将法律业务流程转化为可测试、可说明、可交付的法律科技产品内容，参与功能测试、律师工作流拆解、用户手册制作、产品表达与需求反馈整理。',
    proof: ['法律 AI 产品', '需求分析', '功能测试', '项目交付'],
    capabilityTags: ['legal-tech', 'legal-operations']
  },
  {
    id: 'experience-law-firm',
    type: '律所经历',
    title: '律所民事团队与法律服务场景',
    summary: '参与欠款纠纷、保险理赔和侵权责任等案件支持，协助证据梳理、事实材料整理、争议焦点提炼和庭审流程跟进。',
    proof: ['法律研究', '案件支持', '材料整理', '律师协作'],
    capabilityTags: ['legal-support']
  },
  {
    id: 'experience-taipei-exchange',
    type: '涉外学习经历',
    title: '台北大学交换与英文法律课程',
    summary: '修读欧美侵权法、国际公法等课程，使用 IRAC 完成英文案例分析，并通过法律数据库检索和阅读英文材料。',
    proof: ['英文法律材料', '案例检索', 'IRAC', '跨文化学习'],
    capabilityTags: ['cross-border', 'legal-support']
  },
  {
    id: 'experience-moot-arbitration',
    type: '争议解决训练',
    title: 'IMAC 模拟仲裁与 CISG 案例分析',
    summary: '围绕国际货物买卖争议完成案件分析、仲裁文书写作、争议焦点梳理和团队协作，涉及合同履行、损害赔偿及仲裁程序。',
    proof: ['模拟仲裁', 'CISG', '争议分析', '仲裁文书'],
    capabilityTags: ['legal-support', 'cross-border']
  },
  {
    id: 'experience-legal-foundation',
    type: '教育与资格',
    title: '法学教育与法律职业资格',
    summary: '西北政法大学法学本科，取得 A 类法律职业资格证书；现于同济大学攻读法律硕士。',
    proof: ['法学本科', '法考 A 证', '法律硕士', '专业基础'],
    capabilityTags: ['legal-support']
  },
  {
    id: 'portfolio-site',
    type: '网页成果',
    title: '赵怡彤个人作品集网站',
    summary: '将法律、企业、涉外与法律科技实践整理为可访问的网页成果，持续维护项目说明、脱敏边界、教程和作品链接。',
    proof: ['信息架构', '网页交付', '内容整理', '持续维护'],
    capabilityTags: ['legal-operations']
  }
] as const;

export const capabilityLabels: Record<CapabilityId, string> = Object.fromEntries(
  capabilityOrder.map((id) => [id, capabilityMap[id].shortTitle])
) as Record<CapabilityId, string>;

export const fasuoExperience = {
  organization: '法索 AI',
  role: '法律科技产品与运营实习',
  date: '',
  positioning: '将法律业务流程转化为可测试、可说明、可交付的法律科技产品内容。',
  about: '目前拥有法律科技公司实习经历，参与法律 AI 产品的功能测试、律师工作流梳理、用户手册制作、产品内容表达和用户反馈整理，并尝试通过 AI 工具与网页原型解决真实法律业务问题。',
  responsibilities: [
    '完整体验和测试法律 AI 产品主要功能，记录操作流程、输入输出、异常情况及用户使用障碍。',
    '从律师工作场景出发，梳理文书生成、材料管理、法律检索、OCR 识别和证据时间轴等功能流程。',
    '制作产品用户手册、功能介绍、操作教程及培训材料，将复杂功能转化为可执行步骤。',
    '梳理产品功能亮点、典型场景和用户价值，为官网、公众号、销售资料、社群与培训提供内容。',
    '整理用户问题与反馈，将零散信息转化为产品需求、测试记录和优化建议。',
    '使用 AI 编程及网页工具制作功能演示、流程原型和辅助交付材料。'
  ],
  capabilityTags: ['法律科技产品', 'Legal Operations', '企业法务数字化', '法律产品运营', '律师工作流支持']
} as const;

export const fasuoProjects = [
  {
    id: 'fasuo-product-testing',
    name: '法律 AI 全功能体验与测试',
    background: '对法索 AI 各功能入口进行完整盘点和实际体验，识别功能逻辑、使用路径与用户理解成本。',
    work: '记录操作步骤、输入输出结果、功能亮点、异常情况和使用障碍，并整理可执行的优化建议。',
    methods: ['产品实测', '功能盘点', '场景化记录'],
    deliverables: ['测试记录', '功能清单', '优化建议'],
    tags: ['产品测试', '功能盘点', '用户体验', '法律工作流']
  },
  {
    id: 'fasuo-document-template-manual',
    name: '文书模板功能使用手册',
    background: '围绕法律文书生成和模板管理场景，梳理用户从材料、模板检索到自定义模板保存的核心路径。',
    work: '整理三种使用路径：在材料台通过“小索”生成文书、在文书库按分类或关键词查找模板、上传并保存自定义模板。',
    methods: ['路径拆解', '步骤编排', '用户语言转化'],
    deliverables: ['用户使用手册', '操作步骤', '功能说明'],
    tags: ['用户手册', '文书生成', '模板管理', '操作流程']
  },
  {
    id: 'fasuo-ocr-evidence-tutorial',
    name: 'OCR 与证据时间轴操作教程',
    background: '围绕大量图片材料从 OCR 识别到证据时间轴报告生成的实际操作流程，降低用户理解与操作成本。',
    work: '梳理 OCR 安装、批量识别、材料读取、时间轴生成、Word 导出和文件查找步骤，并制作图文教程。',
    methods: ['流程实测', '截图标注', '图文编排'],
    deliverables: ['图文操作教程', 'PDF 教程', '流程说明'],
    tags: ['OCR', '证据整理', '图文教程', '法律科技'],
    image: 'images/projects/evidence-tool-ui-redacted.png',
    imageAlt: '经过脱敏处理的证据时间轴整理工具界面',
    tutorialUrl: 'tutorials/evidence-timeline/'
  },
  {
    id: 'fasuo-product-content',
    name: '法律 AI 产品介绍与运营内容',
    background: '从产品模块定位、用户痛点和典型场景出发，让不同使用者快速理解功能用途和适用边界。',
    work: '梳理核心价值、典型场景和功能亮点，并将其转化为官网、公众号、销售资料、社群宣传和培训可复用内容。',
    methods: ['用户价值梳理', '场景化表达', '内容结构化'],
    deliverables: ['产品介绍', '运营内容', '培训材料'],
    tags: ['产品表达', '运营内容', '用户价值', '培训材料']
  },
  {
    id: 'fasuo-workflow-prototype',
    name: '法律工作流与网页原型',
    background: '结合真实法律业务需求，用可交互成果帮助团队更直观地评审需求和讨论产品逻辑。',
    work: '使用 AI 编程与网页工具制作简单交互页面、流程演示和功能原型，并明确输入、输出及人工复核节点。',
    methods: ['AI 编程', '需求拆解', '交互原型'],
    deliverables: ['网页原型', '流程演示', '需求讨论材料'],
    tags: ['AI 编程', '交互原型', '需求拆解', '流程设计']
  }
] as const;
