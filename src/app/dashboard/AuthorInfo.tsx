import React from 'react'

const AuthorInfo: React.FC<{  publishedAt: string; readTime: number }> = ({ publishedAt }) => {
const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInMs = now.getTime() - date.getTime()
  const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24))
  
  if (diffInDays === 0) return 'Today'
  if (diffInDays === 1) return 'Yesterday'
  if (diffInDays < 7) return `${diffInDays} days ago`
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`
  
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
    return(
    
  <div className="flex items-end space-x-3 text-sm text-gray-600">
    <span className='text-end'>{formatDate(publishedAt)}</span>
  </div>
)
}



export default AuthorInfo