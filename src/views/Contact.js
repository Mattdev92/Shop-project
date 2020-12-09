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
} from 'views/Contact-styles';

const tab = [1, 2, 3, 4, 5];
const formData = {
   type: ['text', 'email', 'text'],
   name: ['name', 'email', 'message'],
   placeholder: [
      'Imie',
      'Adres mailowy',
      'Wiadomość',
   ],
};
const randomTab = [1, 2, 3, 4, 5, 6, 7, 8];

const Contact = ({ sidebarOpen }) => {
   return (
      <>
         <MainTemplate bottom>
            <Wrapper sidebaropen={sidebarOpen}>
               <ContactTitle>
                  Kontakt
               </ContactTitle>
               <Formik
                  initialValues={{
                     name: '',
                     email: '',
                     message: '',
                  }}
                  validate={(values) => {
                     const errors = {};
                     if (!values.email) {
                        errors.email = 'Required';
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
                           JSON.stringify(
                              values,
                              null,
                              2,
                           ),
                        );
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
                     <Form
                        onSubmit={handleSubmit}
                     >
                        {formData.type.map(
                           (item, i) => {
                              return (
                                 <div
                                    key={tab[i]}
                                 >
                                    <h3
                                       key={
                                          formData
                                             .placeholder[
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
                                       key={
                                          randomTab[
                                             i
                                          ]
                                       }
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
                                          formData
                                             .name[
                                             i
                                          ]
                                       }
                                       autoComplete="off"
                                    />
                                    {errors[
                                       formData
                                          .name[i]
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
                           WYŚLIJ
                        </Button>
                     </Form>
                  )}
               </Formik>
            </Wrapper>
         </MainTemplate>
         <Footer />
      </>
   );
};
const mapStateToProps = (state) => {
   const { sidebarOpen } = state;
   return { sidebarOpen };
};
export default connect(mapStateToProps)(Contact);
Contact.propTypes = {
   sidebarOpen: PropTypes.bool,
};
