class calculator
{
	constructor(previousoperandtextelement,curentoperandtextelement)
	{
		this.previousoperandtextelement=previousoperandtextelement
		this.curentoperandtextelement=curentoperandtextelement
		this.clear()
	}
	clear()
	{
		this.curentoperand=''
		this.previousoperand=''
		this.operation=undefined
	}
	delete()
	{
		this.curentoperand = this.curentoperand.tostring().slice(0, -1)
	}
	appendnumber(number)
	{
		if (number === '.' && this.curentoperand.includes('.')) return
		this.curentoperand = this.curentoperand.tostring() + number.tostring()
	}
	chooseoperation(operation)
	{
		if (this.curentoperand === '') return
		if (this.previousoperand !== ''){
			this.compute()
		}
		this.operation = operation
		this.previousoperand = this.curentoperand
		this.curentoperand=''
	}
	compute() 
	{
		let computation
		const prev = parsefloat(this.previousoperand)
		const curent = parsefloat(this.curentoperand)
		if(isnan(prev) || isnan(curent)) return
		switch (this,operation)
		{
			case '+' :
				computation = prev+curent
				break
			case '-' :
				computation = prev-curent
				break
			case '*' :
				computation = prev*curent
				break
			case '/' :
				computation = prev/curent
				break
			default:
				return
		}
		this.curentoperand = computation
		this.operation = undefined
		this.previousoperand =''
	}
	updatedisplay()
	{
		this.curentoperandtextelement.innertext=this.curentoperand

		this.previousoperandtextelement.innertext=this.previousoperand
	}
}
const numberButtons = document.queryselectorall('[data-number]')
const operationbuttons = document.queryselectorall('[data-operation]')
const equalsbutton = document.queryselector('[data-equals]')
const deletebutton = document.queryselector('[data-delete]')
const allclearbutton = document.queryselector('[data-all-clear]')
const previousoperandtextelement = document.queryselector('[data-previous-operand]')
const curentoperandtextelement = document.queryselector('[data-curent-operand]')

const calculator = new calculator(previousoperandtextelement,curentoperandtextelement)

numberbuttons.foreach(button =>
{
	button.addeventlistner('click',()=>
	{
		calculator.appendnumber(button.innertext)
		calculator.updatedisplay()
	})
})
operationbuttons.foreach(button =>
{
	button.addeventlistner('click',()=>
	{
		calculator.chooseoperation(button.innertext)
		calculator.updatedisplay()
	})
})

equalsbutton.addeventlistner('click', button=>{
	calculator.compute()
	calculator.updatedisplay()
})

allclearbutton.addeventlistner('click', button=>{
	calculator.clear()
	calculator.updatedisplay()
})
deletebutton.addeventlistner('click', button=>{
	calculator.delete()
	calculator.updatedisplay()
})