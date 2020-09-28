import React from 'react';
import styled, { css } from 'styled-components';
import Title from 'components/atoms/title/title';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tab1 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
const formData = {
  type: ['text', 'text', 'text', 'email', 'text'],
  name: ['name', 'surname', 'surname', 'email', 'message'],
  placeholder: ['Imie', 'Nazwisko', 'Adres zamieszkania', 'Adres mailowy', 'Wiadomość do dostawcy'],
};

const Wrapper = styled.div`
  margin:-90vh 0 0 0;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  @media (max-width: 440px) {
    ${({ sidebarOpen }) =>
      sidebarOpen &&
      css`
        display: none;
      `}
  }
`;

const Form = styled.form`
  width: 80vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(255, 232, 0);
  @media (max-width: 440px) {
    width: 80vw;
    height: 100vh;
  }
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  width: 140px;
  font-size: 2rem;
  margin: 40px;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    border: none;
  }
`;

const Input = styled.input`
  text-align: center;
  padding: 20px 0;
  width: 30vw;
  display: flex;
  align-items: left;
  border: none;
  border-bottom: 3px solid black;
  background-color: rgb(255, 232, 0);
  @media (max-width: 440px) {
    width: 60vw;
    padding: 10px 0;
  }
`;

const ContactTitle = styled(Title)`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 3rem;
  margin: 20px;
  @media (max-width: 440px) {
    font-size: 2rem;
    margin: 70px 0 0 0;
  }
`;
const Info = styled.div`
  margin: 20px;
  font-size: 1.5rem;
  font-weight: bold;
`;
const FinalForm = ({ sidebarOpen, SumOfAllPrices, productQuantity }) => {
  return (
    <MainTemplate display>
      <Wrapper sidebarOpen={sidebarOpen}>
        <ContactTitle>Formularz zakupu</ContactTitle>
        {productQuantity !== 0 ? (
          <>
            <Info>
              Kupujesz {productQuantity === 1 ? 'produkt' : 'produkty'} za łączną kwotę{' '}
              {SumOfAllPrices} zł brutto
            </Info>
            <Formik
              initialValues={{ name: '', email: '', message: '' }}
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                  errors.email = 'Invalid email address';
                }
                return errors;
              }}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert('Dziękujemy za zakup !', JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
              }) => (
                <Form onSubmit={handleSubmit}>
                  {formData.type.map((item, i) => {
                    return (
                      <div key={tab1[i]}>
                        <h3 key={tab[i]}>{formData.placeholder[i]} </h3>
                        <Input
                          type={formData.type[i]}
                          name={formData.name[i]}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values[formData.name[i]]}
                          placeholder={formData.placeholder[i]}
                          id={tab1[i]}
                          autoComplete="off"
                          key={tab1[i]}
                        />
                        {errors[formData.name[i]] &&
                          touched[formData.name[i]] &&
                          errors[formData.name[i]]}
                      </div>
                    );
                  })}
                  <Button type="submit">Kup</Button>
                </Form>
              )}
            </Formik>
          </>
        ) : (
          'Koszyk jest pusty'
        )}
      </Wrapper>
    </MainTemplate>
  );
};
const mapStateToProps = (state) => {
  const { sidebarOpen, SumOfAllPrices, productQuantity } = state;
  return { sidebarOpen, SumOfAllPrices, productQuantity };
};
export default connect(mapStateToProps)(FinalForm);
FinalForm.propTypes = {
  sidebarOpen: PropTypes.bool,
};
