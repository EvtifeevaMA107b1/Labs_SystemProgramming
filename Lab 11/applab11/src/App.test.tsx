import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import TaskList from './Components/ToDo';


test('Проверка рендера', () => {
    render(<TaskList  />);
});

test('кнопка на экране', () => {
 
  const {  getByText } = render(<TaskList />);

  expect(screen.getByText('Добавить')).toBeInTheDocument();
});

test('добавление задачи работает', () => {
  const { getByPlaceholderText, getByText } = render(<TaskList />);

  const input = getByPlaceholderText('Введите задачу...');
  const addButton = getByText('Добавить');

  fireEvent.change(input, { target: { value: 'test' } });
  fireEvent.click(addButton);

  expect(getByText('test')).toBeInTheDocument();
});

test('отметка задачи как выполненной работает правильно', () => {
  const {getByPlaceholderText, getByText } = render(<TaskList />);
  const input = getByPlaceholderText('Введите задачу...');
  const addButton = getByText('Добавить');

  fireEvent.change(input, { target: { value: 'test' } });
  fireEvent.click(addButton);
  const compButton = getByText('✔');
  fireEvent.click(compButton);

  expect(getByText('test')).toBeInTheDocument();
  const task = getByText('test', { exact: false });
  fireEvent.click(task);

  expect(task).toHaveTextContent('test (✔)');
});

test('удаление задачи работает правильно', () => {
  const { getByPlaceholderText,container, getByText } = render(<TaskList />);
  const input = getByPlaceholderText('Введите задачу...');
  const addButton = getByText('Добавить');

  fireEvent.change(input, { target: { value: 'test' } });
  fireEvent.click(addButton);

  expect(getByText('test')).toBeInTheDocument();
  const deleteButton = getByText('X');
  fireEvent.click(deleteButton);

  expect(container.querySelector('ul')).toBeEmptyDOMElement();
});