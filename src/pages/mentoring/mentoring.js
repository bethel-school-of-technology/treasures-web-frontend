import React from 'react';
// May change this back but currently the mentoring component is only reading the 
// mentoring.css file and the rest of the componets can not read this file
import styles from './Mentoring.module.css';

class myMentor extends React.Component {
    render() {
        return (
            <div className="mentoring"> 
                <h2>Life-Journeying</h2>
                <img className={styles.textWrapRight} src="/images/WallerKaren-1.jpeg"></img>
                <p>As a qualified and experienced Life-Coach I have over 8 years experience with over 70 ladies in; Life-coaching, pastoral prayer ministry, Bethel Sozo ministry and mentoring. I offer "Life-Journeying" to a small number of ladies throughout the year. It is a hybrid Spirit-led ministry and I continue to be blessed and excited by the anointing that the sessions carry to bring freedom, vision, momentum and peace into many ladies lives.</p>
                <p><b>So what is it like? </b>Well, for most its spiritual journeying where we include; creativity, talking and listening using counselling tools, spirit-led praying, coaching and even mentoring to help you move forward in one or many areas of your life. For some it is simply contemplative prayer with support and encouragement... for others it’s life-coaching which includes tools, questions, exercises and goal-setting to help you pursue a specific goal or dream. </p>
                <p>Personally, I like to think of it as being your “Come Alongside Me” person who journeys with you and with God, helping you flourish more freely and more fully in your life in a confidential, non-judgemental, genuinely caring, loving and peaceful way.</p>
                <p>I have come alongside young ladies through to those in retirement; mums, students, professionals, business and ministry leaders, retirees, creatives, teachers and more... so many beautiful ladies... I have come alongside people in the areas of; life re-shaping, marriage and relationships, anxiety and stress, becoming or being a mum, career change, health goals, life transitions, fear and depression,  confidence and identity building, positive menopause transition and grief and loss. </p>
                <p>Most of all I believe in creating a grace-led, loving, safe, empowering and God-centred environment where I can help you journey in a Spirit-led way that is right for you and bring you more fully into everything you were created to be!</p>
                <h5>What does it cost?</h5>
                <p>Sessions are for 90 minutes. An Intro Session is free. All sessions can be Face-to-Face in Frodsham, Cheshire or by Skype, Facetime or Phone (£30 per session). For ladies who commit to a number of sessions I also give regular encouragement emails to support you along the journey...</p>
                <p>o finally, if you feel Life-Journeying may be for you, feel free to contact me for a no obligation chat where we can get to know each other a little more and see if I may be the right person to come alongside you… Love and blessings, Karen x</p>
                <h2>Mentoring Support To Coaches</h2>
                <p>As a qualified and experienced Life-Coach I have over 8 years experience of 1-2-1 ministry with over 80 ladies in; Life-coaching/Life-journeying, pastoral/counselling prayer ministry, Bethel Sozo ministry and mentoring. Additionally, I have experience of running group workshops and training workshops in life-coaching and leading wholeness events and retreats.</p>
                <p>As a qualified and experienced Life-Coach I have over 8 years experience of 1-2-1 ministry with over 80 ladies in; Life-coaching/Life-journeying, pastoral/counselling prayer ministry, Bethel Sozo ministry and mentoring. Additionally, I have experience of running group workshops and training workshops in life-coaching and leading wholeness events and retreats. I now offer to be a coaching mentor for life-coaches/those in personal ministry that would value a monthly confidential mentor to support them in their ministry and work. There are 3 ??? spaces available and the costs will be £30 ???? monthly for a 90 minute session or £50 ??? monthly for 2 x 60 minute sessions fortnightly. If this feels something you would value, please get in touch...</p>
            </div>
        )
    }
}


export default myMentor;