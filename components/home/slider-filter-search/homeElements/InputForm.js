/**
 * It takes in a label, lg, and sm, and returns a row with a dropdown input field, a range input field,
 * and a button
 * @returns an object with the key of the property and the value of the property.
 */

import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { getData } from "../../../../utils/getData";
import { Field, Form, Formik } from "formik";
import { ReactstrapSelect } from "../../../../utils/ReactstrapInputsValidation";
import RangeInputFields from "../../../elements/RangeInputFields";
import { useSelector } from "react-redux";
import { useTranslation } from "next-i18next";

const InputForm = ({ lg, sm }) => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const activeLanguage = router.locale;
  const { price, area } = useSelector((state) => state.inputsReducer);

  const minPrice = 450000;
  const maxPrice = 3000000;
  const minSqft = 47;
  const maxSqft = 400;

  const [filterValues, setFilterValues] = useState({
    price,
    area,
  });

  // const [cities, setCities] = useState([]);
  // const [developers, setDevelopers] = useState([]);
  // const [propertyStatus, setPropertyStatus] = useState([]);
  // const [propertyTypes, setPropertyTypes] = useState([]);

  // console.log('property Type is :', propertyTypes);
  
  // useEffect(() => {
  //   getData(`${process.env.API_URL + activeLanguage}/home/get-search-options`)
  //     .then((response) => {
  //       let citiesList = [];
  //       const citiesValues = response.data.data.cities;
  //       citiesValues.forEach(function (city) {
  //         citiesList.push({
  //           id: city.city_id,
  //           name: city.city_name,
  //         });
  //       });
  //       setCities(citiesList);

  //       let developersList = [];
  //       const developerValues = response.data.data.developers;
  //       developerValues.forEach(function (developer) {
  //         developersList.push({
  //           id: developer.developer_id,
  //           name: developer.developer_title,
  //         });
  //       });
  //       setDevelopers(developersList);

  //       let propertyStatusList = [];
  //       const propertyStatusValues = response.data.data.propertyStatus;
  //       for (var key in propertyStatusValues) {
  //         if (propertyStatusValues.hasOwnProperty(key)) {
  //           propertyStatusList.push({
  //             id: key,
  //             name: propertyStatusValues[key],
  //           });
  //         }
  //       }
  //       setPropertyStatus(propertyStatusList);

  //       let propertyTypesList = [];
  //       const propertyTypesValues = response.data.data.propertyTypes;
  //       propertyTypesValues.forEach(function (type) {
  //         propertyTypesList.push({
  //           id: type.property_type_id,
  //           name: type.property_type_title,
  //         });
  //       });
  //       setPropertyTypes(propertyTypesList); 
  //     })
  //     .catch((error) => console.log("Error", error));
  // }, []);


  const [cities, setCities] = useState([]);
  const [developers, setDevelopers] = useState([]);
  const [propertyStatus, setPropertyStatus] = useState([]);
  const [propertyTypes, setPropertyTypes] = useState([]);

  useEffect(() => {
    getData(`${process.env.API_URL + activeLanguage}/home/get-search-options`)
      .then((response) => {
        console.log("API response data:", response);

        const data = response.data.data;

        // Process cities (if available)
        if (data.cities) {
          const citiesList = data.cities.map((city) => ({
            id: city.city_id,
            name: city.city_name,
          }));
          console.log("Processed cities:", citiesList);
          setCities(citiesList);
        } else {
          console.log("No cities data available");
        }

        // Process developers
        if (data.developers) {
          const developersList = data.developers.map((developer) => ({
            id: developer.developer_id,
            name: developer.developer_title,
          }));
          console.log("Processed developers:", developersList);
          setDevelopers(developersList);
        } else {
          console.log("No developers data available");
        }

        // Process property status
        if (data.propertyStatus) {
          const propertyStatusList = Object.keys(data.propertyStatus).map((key) => ({
            id: key,
            name: data.propertyStatus[key],
          }));
          console.log("Processed property status:", propertyStatusList);
          setPropertyStatus(propertyStatusList);
        } else {
          console.log("No property status data available");
        }

        // Process property types
        if (data.propertyTypes) {
          const propertyTypesList = data.propertyTypes.map((type) => ({
            id: type.property_type_id,
            name: type.property_type_title,
          }));
          console.log("Processed property types:", propertyTypesList);
          setPropertyTypes(propertyTypesList);
        } else {
          console.log("No property types data available");
        }
      })
      .catch((error) => console.log("Error fetching data:", error));
  }, [activeLanguage]);


  // end of code 
  const submitSearch = (values) => {
    router.push(
      `/${activeLanguage}/search-results?${serialize({
        ...values,
        ...filterValues,
      })}`
    );
  };

  const serialize = (obj) => {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(
          encodeURIComponent(p) +
            "=" +
            encodeURIComponent(
              obj[p] instanceof Array ? obj[p].join("-") : obj[p]
            )
        );
      }
    return str.join("&");
  };

  return (
    <Formik
      initialValues={{
        property_status: "",
        property_type: "",
        property_room: "",
        property_bath: "",
        property_city: "",
        property_developer: "",
      }}
      onSubmit={(values) => {
        submitSearch(values);
      }}
      render={() => (

        <Form>
          <Row className="gx-3 mb-3">
            <Col sm="3" className="form-group">
              <h5 className="fw-bold mb-2">{t("Advanced Search")}</h5>
            </Col>
            <Col sm="9">
                 <Row className="gx-2">
                    <Col sm="6">  
                      <div class="d-flex align-items-center justify-content-end pe-3">
                        <div class="community-search d-flex flex-row align-items-center justify-content-start gap-3">
                        <label className="mb-0 text-white">Community: </label>
                        <Field
                        name="community_search"   
                        type="text"
                        placeholder="Search..."
                        className="form-control search-box-input dropDownIcon"
                      /> 
                        </div>
                        <div class="community-dropdown"> 
                            <Field
                              name="community_dropdown"
                              component={ReactstrapSelect}
                              type="select"
                              className="form-control search-box-input"
                              options={propertyStatus}
                              inputprops={{
                                options: propertyStatus,
                                defaultOption: t(""),
                              }}
                            />
                        </div> 
                      </div>
                    </Col>
                    <Col sm="6"> 
                      <div class="d-flex align-items-center justify-content-end ps-3">
                        <div class="community-search d-flex flex-row align-items-center justify-content-start gap-3">
                        <label className="mb-0 text-white">Project: </label>
                        <Field
                          name="project_search"
                          type="text"
                          placeholder="Search..."
                          className="form-control search-box-input dropDownIcon"
                        /> 
                        </div>
                        <div class="community-dropdown"> 
                            <Field
                              name="community_dropdown"
                              component={ReactstrapSelect}
                              type="select"
                              className="form-control search-box-input"
                              options={propertyStatus}
                              inputprops={{
                                options: propertyStatus,
                                defaultOption: t(""),
                              }}
                            />
                        </div> 
                      </div>
                    </Col>
                 </Row>
            </Col>
          </Row>
          <Row className="gx-3">
            <Col sm="2" className="form-group">
              <Field
                name="property_status"
                component={ReactstrapSelect}
                type="select"
                className="form-control search-box-input"
                options={propertyStatus}
                inputprops={{
                  options: propertyStatus,
                  // defaultOption: t("Property Status"),
                  defaultOption: t("The Choices"),
                }}
              />
            </Col>
            <Col sm="2" className="form-group">
              <Field
                name="property_type"
                component={ReactstrapSelect}
                type="select"
                className="form-control search-box-input"
                inputprops={{
                  options: propertyTypes,
                  defaultOption: t("Property Type"),
                }}
              />
            </Col>

            <Col sm="2" className="form-group">
              <Field
                name="property_room"
                component={ReactstrapSelect}
                type="select"
                className="form-control search-box-input"
                inputprops={{
                  options: ["1", "2", "3", "4", "5", "6"],
                  defaultOption: t("Rooms"),
                }}
              />
            </Col>
            <Col sm="3" className="form-group">
              <Field
                name="property_bath"
                component={ReactstrapSelect}
                type="select"
                className="form-control search-box-input"
                inputprops={{
                  options: ["1", "2", "3"],
                  defaultOption: t("Bath"),
                }}
              />
            </Col>

            {/* <Col sm="2" className="form-group">
              <Field
                name="property_city"
                component={ReactstrapSelect}
                type="select"
                className="form-control search-box-input"
                inputprops={{
                  options: cities,
                  defaultOption: t("Area"),
                }}
              />
            </Col> */}
            <Col sm="3" className="form-group">
              <Field
                name="property_developer"
                component={ReactstrapSelect}
                type="select"
                className="form-control search-box-input"
                inputprops={{
                  options: developers,
                  defaultOption: t("Developer"),
                }}
              />
            </Col>

            <Col sm="5" className="form-group">
              <RangeInputFields
                label={t("Price")}
                name="price"
                filterValues={filterValues}
                setFilterValues={setFilterValues}
                min={Math.round(minPrice)}
                max={Math.round(maxPrice)}
                lg={lg}
                sm={sm}
              />
            </Col>

            <Col sm="5" className="form-group">
              <RangeInputFields
                label={t("Size")}
                name="area"
                filterValues={filterValues}
                setFilterValues={setFilterValues}
                min={Math.round(minSqft)}
                max={Math.round(maxSqft)}
                lg={lg}
                sm={sm}
              />
            </Col>

            <div className="col-sm-2 next-btn">
              <Button type="submit" className="btn btn-gradient w-100 mb-0">
                {t("Search")}
              </Button>
            </div>
          </Row>
        </Form>
      )}
    />
  );
};

export default InputForm;
