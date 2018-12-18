import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public projectForm: FormGroup;
  public statuses = [{'id':1, 'name':'Stable'}, {'id':2, 'name': 'Critical'}, {'id':3, 'name': 'Finished'}];

  ngOnInit(): void {
    this.setUpForm();
  }

   private setUpForm(): void {
    this.projectForm = new FormGroup({
      projectName: new FormControl('', [Validators.required, this.forbiddenName.bind(this)], this.forbiddenNameAsync),
      mail: new FormControl('', [Validators.required, Validators.email]),
      status: new FormControl('')
    });
  }

  public onSubmit(): void{
    console.log(this.projectForm.value);
  }

  private forbiddenName(control: FormControl): {[s:string]: boolean}{
    if(String(control.value).replace(' ', '').toUpperCase() == "TEST"){
      return {'projectName':true}
    }

    return null;
  }
  
  private forbiddenNameAsync(control: FormControl): Promise<any> | Observable<any>{
    const promise  = new Promise<any>((resolve, reject) => {
      setTimeout(()=>{
        if(String(control.value).replace(' ', '').toUpperCase() == "TESTASYNC"){
          resolve({'projectNameAsync': true});
        }else{
          resolve(null);
        }
      }, 1500)
    });

    return promise;
  }
  
}