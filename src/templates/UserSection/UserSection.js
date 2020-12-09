import React from 'react';
import Cardlazy from 'components/molecules/card/cardlazy';
import { connect } from 'react-redux';
import { textFilter } from 'actions';
import PropTypes from 'prop-types';
import { TimelineMax } from 'gsap';

import {
   InnerWrapper,
   FilterWrapper,
   Input,
   Img,
} from 'templates/UserSection/UserSection-styles';

class UserTemplate extends React.Component {
   constructor(props) {
      super(props);
      this.myCard = null;
      this.tlMain = new TimelineMax();
   }

   componentDidMount() {
      // use the node ref to create the animation
      this.tlMain
         .fromTo(
            this.myCard,
            { autoAlpha: 0 },
            { duration: 0.8, autoAlpha: 1 },
         )
         .delay(0.4);
   }

   render() {
      const {
         pathname,
         Man,
         Woman,
         textFilter,
         eventText,
         sidebarOpen,
      } = this.props;

      return (
         <div>
            <FilterWrapper
               sidebaropen={sidebarOpen}
            >
               <Img />
               <Input
                  onChange={(event) =>
                     textFilter(
                        event.target.value,
                     )
                  }
                  type="text"
                  placeholder="Szukaj"
               />
            </FilterWrapper>

            <InnerWrapper
               sidebaropen={sidebarOpen}
               ref={(card) =>
                  (this.myCard = card)
               }
            >
               {pathname.includes('Ona')
                  ? eventText === ''
                     ? Woman.map((
                          //Display all Woman products
                          product,
                       ) => (
                          <Cardlazy
                             product={product}
                             key={product}
                          >
                             {product[1]}{' '}
                             {product[2]}
                             zł
                          </Cardlazy>
                       ))
                     : Woman.filter((product) =>
                          product[1]
                             .toUpperCase()
                             .includes(
                                eventText.toUpperCase(),
                             ),
                       ).map((
                          product,
                          //Display filtered Woman products
                       ) => (
                          <Cardlazy
                             product={product}
                             key={product}
                          >
                             {product[1]}{' '}
                             {product[2]}
                             zł
                          </Cardlazy>
                       ))
                  : pathname.includes('On') &&
                    (eventText === ''
                       ? Man.map((product) => (
                            <Cardlazy
                               product={product}
                               key={product}
                            >
                               {product[1]}{' '}
                               {product[2]}
                               zł
                            </Cardlazy>
                         ))
                       : Man.filter((product) =>
                            product[1]
                               .toUpperCase()
                               .includes(
                                  eventText.toUpperCase(),
                               ),
                         ).map((
                            product,
                            //Display filtered Man products
                         ) => (
                            <Cardlazy
                               product={product}
                               key={product}
                            >
                               {product[1]}{' '}
                               {product[2]}
                               zł
                            </Cardlazy>
                         )))}
               {pathname.includes('Okazje') &&
                  (eventText === ''
                     ? Woman.concat(Man)
                          .filter(
                             (product) =>
                                product[2] < 100,
                          )
                          .map((
                             //Display all Woman products
                             product,
                          ) => (
                             <Cardlazy
                                product={product}
                                key={product}
                             >
                                {product[1]}{' '}
                                {product[2]}
                                zł
                             </Cardlazy>
                          ))
                     : Woman.concat(Man)
                          .filter(
                             (product) =>
                                product[2] <
                                   100 &&
                                product[1]
                                   .toUpperCase()
                                   .includes(
                                      eventText.toUpperCase(),
                                   ),
                          )
                          .map((
                             product,
                             //Display filtered Man products
                          ) => (
                             <Cardlazy
                                product={product}
                                key={product}
                             >
                                {product[1]}{' '}
                                {product[2]}
                                zł
                             </Cardlazy>
                          )))}
            </InnerWrapper>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   const {
      Man,
      Woman,
      eventText,
      sidebarOpen,
   } = state;
   return { Man, Woman, eventText, sidebarOpen };
};
const mapDispatchToProps = (dispatch) => ({
   textFilter: (eventText) =>
      dispatch(textFilter(eventText)),
});

export default connect(
   mapStateToProps,
   mapDispatchToProps,
)(UserTemplate);
UserTemplate.propTypes = {
   pathname: PropTypes.string,
   Man: PropTypes.array,
   Woman: PropTypes.array,
   eventText: PropTypes.string,
   sidebarOpen: PropTypes.bool,
};
