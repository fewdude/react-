import React from 'react';
import {Fname,Lname} from './Cont1';

const Cont3=()=>{
	return(<>
	{}
		<Fname.Consumer>
			{
				(v)=>{
					return(<>
						<Lname.Consumer>{
							(v2)=>{
								return(<>

									<h1>{v} and {v2}</h1>
									

								</>);
							}
						}
							
						</Lname.Consumer>
						}
						

					</>);

				}
			}
		</Fname.Consumer>
		

	</>);
};
export default Cont3;