import react from 'react';
import styles from './InstallationPage.module.css'


import { Container, Flex, Sidebar } from '@/Components/Layout'


export const InstallationPage = () => {
  return (
    <Container>
      <Flex>
        <aside>
          <Sidebar />
        </aside>
        <Flex justify='center'>
          <h1>Установка</h1>
        </Flex>
      </Flex>
    </Container>
  )
}