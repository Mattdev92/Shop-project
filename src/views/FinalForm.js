import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import { Formik } from 'formik';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Footer from 'components/organisms/footer/footer';
import {
   Wrapper,
   Form,
   Button,
   Input,
   ContactTitle,
   Info,
} from 'views/FinalForm-styles';
const tab = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const tab1 = [
   11,
   22,
   33,
   44,
   55,
   66,
   77,
   88,
   99,
   100,
];
const formData = {
   type: [
      'text',
      'text',
      'text',
      'email',
      'text',
   ],
   name: [
      'name',
      'surname',
      'surname',
      'email',
      'message',
   ],
   placeholder: [
      'Imie',
      'Nazwisko',
      'Adres zamieszkania',
      'Adres mailowy',
      'Wiadomość do dostawcy',
   ],
};

const FinalForm = ({
   sidebarOpen,
   SumOfAllPrices,
   productQuantity,
}) => {
   return (
      <>
         <MainTemplate display>
            <Wrapper sidebaropen={sidebarOpen}>
               <ContactTitle>
                  Formularz zakupu
               </ContactTitle>
               {productQuantity !== 0 ? (
                  <>
                     <Info>
                        Kupujesz{' '}
                        {productQuantity === 1
                           ? 'produkt'
                           : 'produkty'}{' '}
                        za łączną kwotę{' '}
                        {SumOfAllPrices} zł brutto
                     </Info>
                     <Formik
                        initialValues={{
                           name: '',
                           email: '',
                           message: '',
                        }}
                        validate={(values) => {
                           const errors = {};
                           if (!values.email) {
                              errors.email =
                                 'Required';
                           } else if (
                              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                                 values.email,
                              )
                           ) {
                              errors.email =
                                 'Invalid email address';
                           }
                           return errors;
                        }}
                        onSubmit={(
                           values,
                           { setSubmitting },
                        ) => {
                           setTimeout(() => {
                              alert(
                                 'Dziękujemy za zakup !',
                                 JSON.stringify(
                                    values,
                                    null,
                                    2,
                                 ),
                              );
                              setSubmitting(
                                 false,
                              );
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
                           <Form
                              onSubmit={
                                 handleSubmit
                              }
                           >
                              {formData.type.map(
                                 (item, i) => {
                                    return (
                                       <div
                                          key={
                                             tab1[
                                                i
                                             ]
                                          }
                                       >
                                          <h3
                                             key={
                                                tab[
                                                   i
                                                ]
                                             }
                                          >
                                             {
                                                formData
                                                   .placeholder[
                                                   i
                                                ]
                                             }{' '}
                                          </h3>
                                          <Input
                                             type={
                                                formData
                                                   .type[
                                                   i
                                                ]
                                             }
                                             name={
                                                formData
                                                   .name[
                                                   i
                                                ]
                                             }
                                             onChange={
                                                handleChange
                                             }
                                             onBlur={
                                                handleBlur
                                             }
                                             value={
                                                values[
                                                   formData
                                                      .name[
                                                      i
                                                   ]
                                                ]
                                             }
                                             placeholder={
                                                formData
                                                   .placeholder[
                                                   i
                                                ]
                                             }
                                             id={
                                                tab1[
                                                   i
                                                ]
                                             }
                                             autoComplete="off"
                                             key={
                                                tab1[
                                                   i
                                                ]
                                             }
                                          />
                                          {errors[
                                             formData
                                                .name[
                                                i
                                             ]
                                          ] &&
                                             touched[
                                                formData
                                                   .name[
                                                   i
                                                ]
                                             ] &&
                                             errors[
                                                formData
                                                   .name[
                                                   i
                                                ]
                                             ]}
                                       </div>
                                    );
                                 },
                              )}
                              <Button type="submit">
                                 Kup
                              </Button>
                           </Form>
                        )}
                     </Formik>
                  </>
               ) : (
                  'Koszyk jest pusty'
               )}
            </Wrapper>
         </MainTemplate>
         <Footer />
      </>
   );
};
const mapStateToProps = (state) => {
   const {
      sidebarOpen,
      SumOfAllPrices,
      productQuantity,
   } = state;
   return {
      sidebarOpen,
      SumOfAllPrices,
      productQuantity,
   };
};
export default connect(mapStateToProps)(
   FinalForm,
);
FinalForm.propTypes = {
   sidebarOpen: PropTypes.bool,
};
