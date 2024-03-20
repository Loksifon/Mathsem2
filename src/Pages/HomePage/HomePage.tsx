import React from 'react';
import { Container, Flex } from '@/Components/Layout';
import styles from './HomePage.module.css'
import { Button, SubTitle } from '@/Components/UI';

export const HomePage = () => {
  return (
    <Container>
      <section className={styles.home}>
        <Flex align='center' gap='1.5rem' justify='center'>
          <img src="../../../../public/icon.png" alt="logo" width='128px' className={styles.logo}/>
          <h1 className={styles.title}>Mathsem</h1>
        </Flex>
        <SubTitle className={styles.subtitle} >
          Программа, которая способна находить закономерности
        </SubTitle>
        <a className={styles.download} href='../../../../public/Semantics.exe' download>
          Установить программу
        </a>
      </section>
    </Container>
  )
}