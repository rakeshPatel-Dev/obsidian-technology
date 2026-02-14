import React from 'react'

type Props = {
  title: string
}

const SuperTitle = ({ title }: Props) => {
  return (
    <div>
      <div className="mb-4">
        <span className="inline-block text-[11px] font-medium uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
          {title}
        </span>
      </div>
    </div>
  )
}

export default SuperTitle
