import React from 'react';
import klass from './BlogCard.module.scss';
import Link from 'next/link';

type BlogCardProps = {
  title: string;
  content: string;
  user_name: string;
  link: string;
  created_at: string;
};

function BlogCard({
  title,
  content,
  user_name,
  link,
  created_at,
}: React.PropsWithChildren<BlogCardProps>) {
  return (
    <div className={klass.container}>
      <Link href={link} target='_blank' rel='noopener noreferrer'>
        <div
          className={klass.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <div
          className={klass.content}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className={klass.profile}>
          <div className={klass.user_name}>{user_name}</div>
          <div className={klass.created_at}>{created_at}</div>
        </div>
      </Link>
    </div>
  );
}

export default BlogCard;
