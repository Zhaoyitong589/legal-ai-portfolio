export const siteMeta = {
  name: '赵怡彤',
  title: '法律 AI 实践档案',
  description: '记录法学训练、法律 AI 工具原型与风险治理实践。'
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
