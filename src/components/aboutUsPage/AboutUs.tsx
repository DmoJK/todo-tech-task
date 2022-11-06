import styles from './AboutUs.module.css'

const AboutUsContainer = () => {
  return (
    <div className={styles.main}>
      <div>This is a project in my portfolio. So go to my github and telegram to contact me</div>
      <span className={styles.hrefs}>
      <a href={'https://github.com/DmoJK'}>github</a>
      <a href={'https://t.me/OGTeamPO4'}>telegram</a>
      </span>
    </div>
  )
}

export default AboutUsContainer