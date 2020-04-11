import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import api from '~/services/api';
// import { Link } from 'react-router-dom';

import { Container, ActionList, Action } from './styles';

export default function Approval( { pin, data }) {
  const [visible, setVisible] = useState(false);
  const [upin, setUpin] = useState();
  const coordinator = useSelector(state => state.user.profile.coordinator);

  async function handleToggleVisible() {
    setVisible(!visible);
    await setUpin(pin);
    console.tron.log(coordinator)
  }

  async function handleDelete() {
    await api.delete(`contracts/${upin}/cancel`, {
    })
  }

  async function handleApproval() {
    if (coordinator) {
      toast.error('Apenas o administrador pode aprovar contratos');
    } else {
      await api.put(`approvals/${upin}`, {
      })
      // console.tron.log("handleApproval")
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

