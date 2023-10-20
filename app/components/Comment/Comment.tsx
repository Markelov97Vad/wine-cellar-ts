import { CommentTypeProps } from "@/types/componentProps.types";
import styles from './Comment.module.scss';
import { montserrat, playfairDisplay } from "@/app/fonts";

function Comment({ owner, comment } : CommentTypeProps) {
  return (
    <>
      <p
        className={`${styles["comment__reviwe-title"]} ${playfairDisplay.className}`}
      >
        Отзыв
      </p>
      <span
        className={`${styles["comment__review-owner"]} ${montserrat.className}`}
      >
        {owner?.nameUser?.toUpperCase()}{' '}
        {owner?.surname?.toUpperCase()}
      </span>
      <p
        className={`${styles.comment__rewiew} ${playfairDisplay.className}`}
      >
        {comment}
      </p>
    </>
  );
}

export default Comment;
