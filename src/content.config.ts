import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    year: z.number().optional(),
    statuses: z.array(z.enum(['已上线', '本地原型', '暂未公开部署', '待部署'])).min(1),
    featured: z.boolean().default(false),
    order: z.number(),
    tags: z.array(z.string()),
    cover: z.string(),
    coverAlt: z.string().optional(),
    coverCaption: z.string().optional(),
    screenshots: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional()
    })).default([]),
    externalUrl: z.url().optional(),
    sourceUrl: z.url().optional(),
    updatedAt: z.coerce.date(),
    riskNote: z.string()
  })
});

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    series: z.string().optional(),
    description: z.string(),
    publishedAt: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    statuses: z.array(z.enum(['站内首发', '拟同步公众号', '已同步公众号'])).default(['站内首发']),
    wechatUrl: z.url().optional(),
    externalUrl: z.url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const talks = defineCollection({
  loader: glob({ base: './src/content/talks', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    organizer: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    format: z.string(),
    status: z.enum(['已开展', '受邀分享 / 即将开展', '计划开展']),
    audience: z.string(),
    topic: z.string(),
    role: z.string(),
    tags: z.array(z.string()).default([]),
    summary: z.string(),
    photos: z.array(z.object({
      src: z.string(),
      alt: z.string(),
      caption: z.string().optional()
    })).default([])
  })
});

export const collections = { projects, writing, talks };
