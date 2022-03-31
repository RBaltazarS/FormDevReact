import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Form, Button, Container, Row } from "react-bootstrap";

function FormDev() {
  return (
    <Container>
      <Form>
        {/* Titulo */}

        <Row className="mt-3 mb-3 text-center rounded">
          <Form.Group className="mb-3 mt-3">
            <h1>Cadastro De DEV'S</h1>
            <h6 className="font-monospace">Complete Suas Informações</h6>
          </Form.Group>
        </Row>

        {/* Nome, Sobrenome, Email*/}

        <Row className="mt-3 mb-3">
          <Form.Group className="mb-3">
            <Form.Label class="fw-bold">Nome</Form.Label>
            <Form.Control type="name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label class="fw-bold">Sobrenome</Form.Label>
            <Form.Control type="name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label class="fw-bold">Email </Form.Label>
            <Form.Control type="email" placeholder="nome@email.com.br" />
          </Form.Group>
        </Row>

        {/* Area de Atuação*/}

        <Row>
          <Form.Group className="mt-3 mb-3">
            <Form.Label class="fw-bold mb-2">
              Qual Sua Area De Atuação?
            </Form.Label>
            <Form.Check
              name="technology"
              label="Front-End"
              type="radio"
              id="frontend"
            />
            <Form.Check
              name="technology"
              label="Back-End"
              type="radio"
              id="backend"
            />
            <Form.Check
              name="technology"
              label="Fullstack"
              type="radio"
              id="fullstack"
            />
          </Form.Group>
        </Row>

        {/* Senioridade */}

        <Row>
          <Form.Group className="mt-3 mb-3">
            <Form.Label class="fw-bold mb-2">Senioridade</Form.Label>
            <Form.Select>
              <option>Selecione</option>
              <option value="1">Júnior</option>
              <option value="2">Pleno</option>
              <option value="3">Sênior</option>
            </Form.Select>
          </Form.Group>
        </Row>

        {/* Tecnologias*/}

        <Row>
          <Form.Group className="mt-3 mb-3">
            <Form.Label class="fw-bold mb-2">
              Selecione As Tecnologias Que Utiliza:
            </Form.Label>

            <Form.Check name="technology" label="HTML" inline id="html" />
            <Form.Check name="technology" label="CSS" inline id="css" />
            <Form.Check name="technology" label="JavaScrips" inline id="js" />
            <Form.Check name="technology" label="PHP" inline id="php" />
            <Form.Check name="technology" label="C#" inline id="c#" />
            <Form.Check name="technology" label="Python" inline id="python" />
            <Form.Check name="technology" label="Java" inline id="java" />
            <Form.Check
              name="technology"
              label="Git & Github"
              inline
              id="gitgit"
            />
          </Form.Group>
        </Row>

        {/* Resumo */}

        <Row>
          <Form.Group className="mt-3 mb-3">
            <Form.Label class="fw-bold mb-2">
              Resumo Sobre Suas Experiências:
            </Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Row>

        {/* Botao */}

        <Row>
          <Container className="mt-3 mb-3 text-center rounded button-lg">
            <Button variant="btn btn-info btn-rounded fw-bold">Enviar</Button>
          </Container>
        </Row>
      </Form>
    </Container>
  );
}

export default FormDev;
