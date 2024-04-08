import { FunctionComponent } from 'react'
import { AlertCircle, Check, X } from 'lucide-react'
import Divider from './Divider'
import { fetchServer } from '@/services/serverReq'
import { revalidateTag } from 'next/cache'
import SubmitingButton from './SubmitButton'

interface ListInvitationsProps {
  invitations: {
    id: string
    company: {
      id: string
      name: string
    }
    user: {
      id: string
      name: string
    }
  }[]
}

const ListInvitations: FunctionComponent<ListInvitationsProps> = ({
  invitations,
}) => {
  return (
    <main className=" flex flex-col gap-2">
      {invitations && invitations.length > 0 && (
        <div className=" flex flex-col gap-2">
          <Divider title="Convites" />
          {invitations.map((invitation) => (
            <div
              key={invitation.id}
              className="py-2 px-4 border border-neutral-800 flex items-center gap-4 justify-between rounded-sm text-xs sm:text-sm font-medium h-12 mx-2"
            >
              Juntar-se a {invitation.company.name}?
              <span className="flex items-center gap-2">
                <form
                  method="POST"
                  action={async () => {
                    'use server'

                    await fetchServer('/invite_action', {
                      method: 'POST',
                      body: JSON.stringify({
                        invitationId: invitation.id,
                        status: 'accepted',
                      }),
                    })
                    revalidateTag('invitations')
                  }}
                >
                  <SubmitingButton className="h-7 w-7" size={'icon'}>
                    <Check size={16} />
                  </SubmitingButton>
                </form>
                <form
                  method="POST"
                  action={async () => {
                    'use server'

                    await fetchServer('/invite_action', {
                      method: 'POST',
                      body: JSON.stringify({
                        invitationId: invitation.id,
                        status: 'rejected',
                      }),
                    })
                    revalidateTag('invitations')
                  }}
                >
                  <SubmitingButton
                    className="h-7 w-7"
                    variant={'outline'}
                    size={'icon'}
                  >
                    <X size={16} />
                  </SubmitingButton>
                </form>
              </span>
            </div>
          ))}
        </div>
      )}
      <Divider title="Notificações" />

      <div className="p-4 flex flex-col gap-4">
        <div className="flex items-start gap-2 text-xs">
          <AlertCircle size={16} className="shrink-0" />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          atque et expedita modi dolorum deleniti possimus doloremque vel, quas,
          iusto labore consequatur!
        </div>
        <div className="flex items-start gap-2 text-xs">
          <AlertCircle size={16} className="shrink-0" />
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam,
          atque et expedita modi dolorum deleniti possimus doloremque vel, quas,
          iusto labore consequatur!
        </div>
      </div>
    </main>
  )
}

export default ListInvitations
