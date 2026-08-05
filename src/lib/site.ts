export const siteMeta = {
  name: '赵怡彤',
  title: '赵怡彤个人作品集｜法律、企业法务、法律科技与跨境业务',
  shortTitle: '赵怡彤个人作品集',
  description: '赵怡彤个人作品集，展示法律研究、企业法务、跨境业务及法索 AI 法律科技产品实践，包括产品测试、法律工作流、用户手册与 Legal Operations 项目成果。',
  keywords: '赵怡彤, 法律科技, 法律 AI 产品, 法律工作流, 用户手册, 产品测试, Legal Operations, 企业法务, 跨境业务'
};

export function withBase(path = '') {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  return `${base}${path.replace(/^\/+/, '')}`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  }).format(date);
}
