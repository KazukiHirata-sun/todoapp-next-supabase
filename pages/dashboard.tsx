import { NextPage } from 'next'

import { DocumentTextIcon, LoginIcon, LogoutIcon, StatusOnlineIcon } from '@heroicons/react/solid'
import { useQueryClient } from 'react-query'
import { supabase } from '../utils/supabase'

import { Layout } from '../components/Layout'
import { TaskList } from '../components/TaskList'
import { TaskForm } from '../components/TaskForm'
import { NoticeForm } from '../components/NoticeForm'
import { NoticeList } from '../components/NoticeList'


const Dashboard: NextPage = () => {
  const queryClient = useQueryClient()
  const signOut = () => {
    supabase.auth.signOut()
    queryClient.removeQueries(['todos'])
    queryClient.removeQueries(['notices'])
  }
  return (
    <Layout title="Dashboard">
      <LoginIcon
        className="mb-6 h-6 w-6 cursor-pointer text-blue-600"
        onClick={signOut}
      />
      <div className="grid grid-cols-2 gap-40">
        <div>
          <div className="my-3 flex justify-center">
            <DocumentTextIcon className="h-8 w-8 text-blue-500" />
          </div>
          <TaskForm />
          <TaskList />
        </div>
        <div>
          <div className="my-3 flex justify-center">
            <StatusOnlineIcon className="h-8 w-8 text-blue-500" />
          </div>
          <NoticeForm />
          <NoticeList />
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
