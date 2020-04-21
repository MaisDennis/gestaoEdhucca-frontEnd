import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';
import { Container, ActionList, Action } from './styles';

export default function Approval( { pin }) {
  const [visible, setVisible] = useState(false);
  const [upin, setUpin] = useState();
  const coordinator = useSelector(state => state.user.profile.coordinator);

  async function handleToggleVisible() {
    setVisible(!visible);
    await setUpin(pin);
  }

  async function handleDelete() {
    await api.delete(`contracts/${upin}/cancel`, {
    })
    history.push('/contracts/list')
  }

  async function handleApproval() {
    if (coordinator) {
      toast.error('Apenas o administrador pode aprovar contratos');
    } else {
      await api.put(`approvals/${upin}`, {
      })
      // console.tron.log("handleApproval")
      history.push('/contracts')
    }
  }

  return (
    <Container>
      <button type="button" onClick={handleToggleVisible}>pendente
        <ActionList visible={visible}>
          <Action onClick={handleApproval}>Aprovar</Action>
          <Action onClick={handleDelete}>Cancelar</Action>
        </ActionList>
      </button>
    </Container>
  );
}

