import react from "react";
import styles from "./OverviewPage.module.css";
import { Text } from "@/Components/UI";
import { Container, Flex, FlexUl, Sidebar } from "@/Components/Layout";

export const OverviewPage = () => {
  return (
    <Container>
      <Flex>
        <aside>
          <Sidebar />
        </aside>
        <Flex direction="column" gap="1rem">
          <h1>Обзор</h1>
          <Text>
            M∀thS∃m - Подходит для всех.Ей могут пользоваться студенты,
            аспиранты, научные работнки, научные организации и все те, кто любит
            математику.
          </Text>
          <Text>Функции, которые выполняет технический продукт:</Text>
          <FlexUl direction="column" gap="1rem">
            <li>построение формул с помощью задания операций</li>
            <li>переобозначение формул</li>
            <li>определение типа формулы (выполнимая, замкнутая)</li>
            <li>синтаксический анализ</li>
            <li>запись формулы в сеть или дерево вывода</li>
            <li>подстановка переменных</li>
            <li>устранение термов</li>
            <li>доказательство теорем</li>
            <li>семантический анализ</li>
            <li>
              интерфейс по вводу данных, для просмотра данных, для составления
              словаря, для просмотра работы программы.
            </li>
            <li>перевод формул на естественный язык</li>
          </FlexUl>
        </Flex>
      </Flex>
    </Container>
  );
};
