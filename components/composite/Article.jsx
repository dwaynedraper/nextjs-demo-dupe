import React from "react";
import Image from "next/image";
import styles from "@/dist/Article.module.css";
import Container from "../layout/Container";

export default function Article({ article }) {
  return (
    <>
      <main className={styles.main}>
        <div>
          <h1>{article.title + "title"}</h1>
          <h4>{article.summary + "summary"}</h4>
          <Container>
            <div className='row mt-5 text-start'>
              <p>
                Bacon ipsum dolor amet boudin in excepteur, chuck swine ea flank
                pork shankle biltong ball tip cillum. Reprehenderit cupim spare
                ribs biltong. Elit pork loin nulla voluptate dolor, ut ea.
                Boudin beef ribs aliquip ut pig turkey short loin. Nostrud
                picanha labore excepteur biltong sunt. Chicken reprehenderit
                consectetur buffalo ball tip qui meatball. Alcatra sausage
                reprehenderit cillum quis ipsum nulla, excepteur consequat
                voluptate cupidatat eiusmod.
              </p>
              <p>
                Ground round jowl short ribs tri-tip strip steak pork in. Do
                pork loin nisi, et irure id ham hock hamburger venison culpa
                proident dolor. Tongue magna deserunt pork exercitation nisi
                shoulder beef ribs chislic spare ribs ut alcatra. Drumstick
                excepteur tempor jerky qui lorem do aliquip turducken. Excepteur
                anim burgdoggen meatloaf, hamburger bresaola consequat do
                nostrud prosciutto sint enim duis pig. Meatloaf ut magna ribeye
                incididunt in pancetta spare ribs salami leberkas dolor sint.
              </p>
              <p>
                Velit alcatra venison t-bone id do. Ham aute lorem cupim anim.
                Lorem veniam duis, enim chuck brisket capicola excepteur nulla
                ea esse tri-tip ham hock pariatur. Turkey excepteur mollit quis.
                Aliquip commodo boudin sirloin do dolore mollit ut reprehenderit
                ground round pork belly turducken. Meatball occaecat kevin
                boudin voluptate fatback. Meatball shankle labore ea. Elit
                veniam pig, leberkas nulla turducken lorem bacon culpa jowl
                biltong jerky tongue eiusmod strip steak. Dolore excepteur jerky
                ribeye jowl.
              </p>
              <p>
                Dolor non landjaeger filet mignon strip steak. Ut sunt anim
                meatball bresaola picanha alcatra kielbasa. Dolore andouille
                lorem veniam chicken pork loin. Bacon deserunt pastrami,
                prosciutto leberkas enim elit anim. Nisi kevin chislic ut ut
                doner. Meatloaf tail capicola, brisket qui fugiat chicken chuck
                do minim prosciutto ullamco anim ipsum ball tip. Does your lorem
                ipsum text long for something a little meatier? Give our
                generator a try…
              </p>
            </div>
          </Container>
        </div>
      </main>
    </>
  );
}
