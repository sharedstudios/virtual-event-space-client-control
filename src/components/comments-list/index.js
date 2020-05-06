import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Comment from '../comment-card'
import { fetchComments } from '../actions/comments'
import { useDispatch, useSelector } from 'react-redux'

const CommentsList = () => {
    const dispatch = useDispatch()
    const comments = useSelector(state => state.comments)

    useEffect(() => {
        dispatch(fetchComments())
    }, [dispatch])

    return (
        <div className={styles.comments}>
            <h4>Comments:</h4>
            {console.log('comments')}
            {comments.map((comment, i) => <Comment key={i} {...comment} />)}
        </div >
    )
}

export default React.memo(CommentsList)