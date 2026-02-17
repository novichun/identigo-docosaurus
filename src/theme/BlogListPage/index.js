import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import {
  HtmlClassNameProvider,
  PageMetadata,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import Layout from '@theme/Layout';
import { Wallpaper } from '../../components/elements/wallpaper';

function BlogListPageMetadata(props) {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;

  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListGrid({items}) {
  const defaultAvatar = useBaseUrl('/img/favicon.ico');
  const tagColorClasses = [
    'bg-blue-50 text-blue-700 ring-blue-600/20 hover:bg-blue-100',
    'bg-emerald-50 text-emerald-700 ring-emerald-600/20 hover:bg-emerald-100',
    'bg-amber-50 text-amber-700 ring-amber-600/20 hover:bg-amber-100',
    'bg-rose-50 text-rose-700 ring-rose-600/20 hover:bg-rose-100',
    'bg-violet-50 text-violet-700 ring-violet-600/20 hover:bg-violet-100',
    'bg-cyan-50 text-cyan-700 ring-cyan-600/20 hover:bg-cyan-100',
  ];

  const getTagColorClass = (label = '') => {
    const hash = label
      .split('')
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return tagColorClasses[hash % tagColorClasses.length];
  };

  const formatDate = (value) => {
    if (!value) return '';
    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) return '';
    return new Intl.DateTimeFormat('hu-HU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).format(date);
  };

  return (
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {items.map(({content: BlogPostContent}) => {
        const {metadata, frontMatter} = BlogPostContent;
        const tags = metadata?.tags ?? [];
        const primaryAuthor = metadata?.authors?.[0] ?? null;
        const frontMatterAuthor =
          typeof frontMatter?.author === 'string'
            ? {name: frontMatter.author}
            : frontMatter?.author ?? null;
        const frontMatterAuthors = Array.isArray(frontMatter?.authors)
          ? frontMatter.authors[0]
          : null;
        const fallbackAuthor =
          primaryAuthor ?? frontMatterAuthors ?? frontMatterAuthor ?? null;
        const authorName = fallbackAuthor?.name ?? 'identiGO csapat';
        const authorTitle = fallbackAuthor?.title ?? '';
        const authorImage =
          fallbackAuthor?.imageURL ??
          fallbackAuthor?.image_url ??
          fallbackAuthor?.image ??
          '';
        const resolvedAuthorImage = authorImage || defaultAvatar;
        const dateTime = metadata?.date ?? '';
        const dateLabel = metadata?.formattedDate ?? formatDate(dateTime);
        const title = metadata?.title ?? '';
        const description = metadata?.description ?? '';
        const permalink = metadata?.permalink ?? '#';
        const visibleTags = tags.slice(0, 2);
        const extraTagCount = Math.max(tags.length - visibleTags.length, 0);

        return (
          <article
            key={permalink}
            className="flex max-w-xl flex-col items-start justify-between">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
              {dateLabel ? (
                <time dateTime={dateTime} className="text-gray-500 whitespace-nowrap">
                  {dateLabel}
                </time>
              ) : null}
              <div className="flex flex-wrap items-center gap-2">
                {visibleTags.map((tag) => (
                  <Link
                    key={tag.permalink}
                    to={tag.permalink}
                    className={clsx(
                      'relative z-10 inline-flex max-w-[12rem] items-center rounded-full px-3 py-1.5 font-medium ring-1 ring-inset',
                      'whitespace-nowrap truncate',
                      getTagColorClass(tag.label),
                    )}
                    title={tag.label}>
                    <span className="truncate">{tag.label}</span>
                  </Link>
                ))}
                {extraTagCount > 0 ? (
                  <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1.5 font-medium text-gray-600 ring-1 ring-inset ring-gray-200">
                    +{extraTagCount}
                  </span>
                ) : null}
              </div>
            </div>
            <div className="group relative grow">
              <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                <Link to={permalink}>
                  <span className="absolute inset-0" />
                  {title}
                </Link>
              </h3>
              {description ? (
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {description}
                </p>
              ) : null}
            </div>
            <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
              <img
                src={resolvedAuthorImage}
                alt={authorName}
                className="size-10 rounded-full bg-gray-50 object-cover"
                loading="lazy"
              />
              <div className="text-sm/6">
                <p className="font-semibold text-gray-900">
                  {fallbackAuthor?.url ? (
                    <Link to={fallbackAuthor.url}>
                      <span className="absolute inset-0" />
                      {authorName}
                    </Link>
                  ) : (
                    authorName
                  )}
                </p>
                {authorTitle ? <p className="text-gray-600">{authorTitle}</p> : null}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

function BlogListPageContent(props) {
  const {metadata, items} = props;

  return (
    <Layout>
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Wallpaper color="blue" className="rounded-3xl">
            <div className="px-8 py-12 sm:px-12 sm:py-16">
              <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
                <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
                  Blog
                </h2>
                <p className="mt-2 text-base/7 text-white/80 sm:text-lg/8">
                  Tanulja meg, hogyan növelheti vállalkozását szakértői tanácsainkkal.
                </p>
              </div>
            </div>
          </Wallpaper>
          <BlogListGrid items={items} />
          <div className="mt-12 flex justify-center">
            <BlogListPaginator metadata={metadata} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default function BlogListPage(props) {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
