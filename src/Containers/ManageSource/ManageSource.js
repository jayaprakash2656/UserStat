import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Row, Col } from 'reactstrap';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Chip from '@material-ui/core/Chip';

// import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input/Input';

// import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';

import './ManageSource.css';

const ManageSource = () => {
    const [checkedFolios, setCheckedFolios] = React.useState({
        facebook: false,
        youtube: false,
        twitter: false,
        instagram: false
    });

    const [activeStep, setActiveStep] = React.useState(0)
    const [steps, setSteps] = React.useState(0)
    const [name, setName] = React.useState('')
    const [names, setNames] = React.useState([])


    const handleNext = () => {
        let step = activeStep;
        setActiveStep(step+1);
    }

    const handleChange = (event, name) => {
        let folios = { ...checkedFolios }
        folios[name] = event.target.checked
        if (event.target.checked)
            setSteps(steps+1);
        else
            setSteps(steps-1);
        setCheckedFolios(folios);
    };

    const addChips = (event) => {
		event.preventDefault();
		let tempNames = [ ...names ];
		if (!tempNames.some((e) => e.key === name) && name) {
			tempNames.push({ key: name, label: name });
            // this.setState({ names: tempNames, searchText: '' });
            setNames(tempNames);
            setName('')
		}
    };
    
    const handleDelete = (chipToDelete) => () => {
		let tempNames = [ ...names ];
		if (chipToDelete === 'all') {
			tempNames = null;
			// this.setState({ tempNames: [], searchText: '' });
			setNames([]);
            setName('')
		} else {
			tempNames = tempNames.filter((ele) => {
				return ele.key !== chipToDelete.key;
			});
			// this.setState({ tempNames: tempNames, searchText: '' });
			setNames(tempNames);
            setName('')
		}
	};

    return (
        <div>
            <Row>
                <Col sm="12" md="3" lg="3" xl="4">
                    <div class="label-header">
                        Select Source
                    </div>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedFolios['facebook']}
                                    onChange={(event) => handleChange(event, 'facebook')}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Facebook"
                        />


                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedFolios['youtube']}
                                    onChange={(event) => handleChange(event, 'youtube')}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Youtube"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedFolios['twitter']}
                                    onChange={(event) => handleChange(event, 'twitter')}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Twitter"
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={checkedFolios['instagram']}
                                    onChange={(event) => handleChange(event, 'instagram')}
                                    name="checkedB"
                                    color="primary"
                                />
                            }
                            label="Instagram"
                        />
                    </FormGroup>
                </Col>

                <Col sm="12" md="3" lg="3" xl="4">
                    <div class="label-header">
                        Configure Source
                    </div>
                    <Card>
                        <CardContent>
                            <div class="label-header">
                                {activeStep !== null && steps !== 0 ? Object.keys(checkedFolios)[activeStep] : null}
                            </div>
                        <form style={{ display: 'inline', marginLeft: '17px' }} onSubmit={addChips}>
                            Username &nbsp;
                            <Input
                                styleName="search"
                                placeholder="type a name"
                                onChange={(event) => setName(event.target.value)}
                                value={name}
                                disabled={steps === 0}
                            />
                        </form>
                        {names.map((nam) => {
                            return (
                                <Chip
                                    label={nam.label}
                                    key={nam.key}
                                    style={{ margin: '2px 4px' }}
                                    onDelete={handleDelete(nam)}
                                    // color="primary"
                                />
                            );
                        })}
                        </CardContent>
                        <CardActions>
                            <Button  variant="contained" size="small">Proceed for Ingestion</Button>
                        </CardActions>
                    </Card>
                    <MobileStepper
                        variant="dots"
                        steps={steps}
                        position="static"
                        activeStep={activeStep}
                        // className={classes.root}
                        nextButton={
                            <Button size="small" color="primary" variant="contained" onClick={handleNext} disabled={activeStep+1 === steps}>
                                Next
                            </Button>
                        }
                        // backButton={
                        //     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                        //         {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                        //         Back
                        //         </Button>
                        // }
                    />
                </Col>
                <Col lg={3}>
                {activeStep+1 === steps && names.length !== 0? 
                    (<div>
                    <Row style={{height: '100px'}}/>
                    <Button size="small" 
                        style={{ marginLeft: '30%'}}
                        color="primary"  variant="contained" onClick={()=>null}>
                        Start Ingestion
                    </Button>
                    </div>)
                    : null}
                </Col>
            </Row>
        </div>
    );
}

export default ManageSource;