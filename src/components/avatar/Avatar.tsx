import styles from "./Avatar.module.css";

interface AvatarProps {
  firstName: string;
  lastName: string;
}

const Avatar = ({ firstName, lastName }: AvatarProps) => {
  return (
    <div className={styles.avatarWrapper}>
      {firstName[0]}
      {lastName[0]}
    </div>
  );
};

export default Avatar;
