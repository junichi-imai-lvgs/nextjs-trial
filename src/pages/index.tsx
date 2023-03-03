import DefaultLayout from '@/components/templates/DefaultLayout';
import Home from '@/components/templates/Home';
import Meta from '@/components/templates/Meta';
import wrapper from '@/states/store';
import initialState from '@/states/user/initialState';
import { setUserName } from '@/states/user/slice';
import type { User } from '@/types/user';
import type { NextPage } from 'next';

const Index: NextPage = () => {
  return (
    <DefaultLayout>
      <Meta title="Home" />
      <Home />
    </DefaultLayout>
  );
};

export default Index;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );
      const user = (await response.json()) as User;

      store.dispatch(setUserName(user.name));

      return {
        props: user,
      };
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
      return {
        props: initialState,
      };
    }
  }
);
