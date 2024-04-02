'use client'

import { FunctionComponent, useEffect, useState } from 'react'
import { Button } from './ui/button'
import { AlertCircle, Check, Loader2, X } from 'lucide-react'
import { restApi } from '../../services/api'
import Divider from './Divider'

interface ListInvitationsProps {
  user_id: string
}

interface InvitationProps {
  id: string
  company: {
    id: string
    name: string
  }
  user: {
    id: string
    name: string
  }
  loading: boolean // Novo campo para indicar se a requisição está em andamento
}

const ListInvitations: FunctionComponent<ListInvitationsProps> = ({
  user_id,
}) => {
  const [invitations, setInvitations] = useState<InvitationProps[]>([])
  const [loadingInvitation, setLoadingInvitation] = useState(false)

  async function getInvitations() {
    setLoadingInvitation(true)
    try {
      const response = await restApi.get(
        `/invitations?userId=${user_id}&status=pending`,
      )
      const updatedInvitations = response.data.invitations.map(
        (invitation: InvitationProps) => ({
          ...invitation,
          loading: false, // Inicialmente, a requisição não está em andamento para nenhum convite
        }),
      )
      setInvitations(updatedInvitations)
    } catch (error) {
      console.log('Error fetching invitations:', error)
    } finally {
      setLoadingInvitation(false)
    }
  }

  async function actionInvitation(action: string, invitationId: string) {
    try {
      // Atualiza o estado do convite para indicar que a requisição está em andamento
      const updatedInvitations = invitations.map((invitation) => {
        if (invitation.id === invitationId) {
          return { ...invitation, loading: true }
        }
        return invitation
      })
      setInvitations(updatedInvitations)

      await restApi.post('invite_action', {
        userId: user_id,
        invitationId: invitationId,
        status: action,
      })

      // Remove o convite da lista após a requisição ser concluída
      const updatedInvitationsAfterAction = invitations.filter(
        (invitation) => invitation.id !== invitationId,
      )
      setInvitations(updatedInvitationsAfterAction)
    } catch (error) {
      console.log('Error handling invitation action:', error)
    }
  }

  useEffect(() => {
    getInvitations()
  }, [])

  if (loadingInvitation) {
    return (
      <div className="w-full pb-8 pt-4 flex items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    )
  }

  return (
    <main className=" flex flex-col gap-2">
      {invitations.length > 0 && (
        <div className=" flex flex-col gap-2">
          <Divider title="Convites" />
          {invitations.map((invitation) => (
            <div
              key={invitation.id}
              className="py-2 px-4 dark:bg-system-950 bg-system-300 flex items-center gap-4 justify-between rounded-sm text-xs sm:text-sm font-medium h-14 mx-2"
            >
              Juntar-se a {invitation.company.name}?
              <span className="flex items-center gap-2">
                {invitation.loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    <Button
                      size={'icon'}
                      onClick={() =>
                        actionInvitation('accepted', invitation.id)
                      }
                    >
                      <Check size={18} />
                    </Button>
                    <Button
                      variant={'outline'}
                      size={'icon'}
                      onClick={() =>
                        actionInvitation('rejected', invitation.id)
                      }
                    >
                      <X size={18} />
                    </Button>
                  </>
                )}
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
