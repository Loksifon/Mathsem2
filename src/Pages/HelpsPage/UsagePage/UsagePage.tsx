import react from 'react';
import styles from './UsagePage.module.css'


import { Container, Flex, Sidebar } from '@/Components/Layout'


export const UsagePage = () => {
  return (
    <Container>
      <Flex>
        <aside>
          <Sidebar />
        </aside>
        <Flex justify='center'>
          <h1>Использование</h1>
        </Flex>
      </Flex>
    </Container>
  )
}