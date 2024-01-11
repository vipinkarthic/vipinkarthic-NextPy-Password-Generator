import nextpy as xt
import string
import random
import zxcvbn

universalpwd = "ffff"
symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>/?`~"
UniversalList = {"lowercase": False, "uppercase": False, "numbers": False, "symbols": False}
uppercase_letters = string.ascii_uppercase
lowercase_letters = string.ascii_lowercase
numbers = string.digits

class ButtonState(xt.State):
    def copytoclip(self):
        return xt.window_alert(" hello world ")

class CheckboxState(xt.State):
    checkednums: bool = False
    checkedsym: bool = False
    checkedupper: bool = False
    passwordf: str = ""
    checkedlower: bool = False
    pwd: str = ""
    length: str = "8"
    strength: str = ""
    def updatevalues(self):
        UniversalList["lowercase"] = self.checkedlower
        UniversalList["uppercase"] = self.checkedupper
        UniversalList["numbers"] = self.checkednums
        UniversalList["symbols"] = self.checkedsym
        UniversalList["length"] = self.length
        print(UniversalList)
        
    def passwordgen(self):
        s = ""
        password = ""
        count = 0
        for i in [self.checkednums,self.checkedsym,self.checkedupper,self.checkedlower]:
            if i :
                count += 1
        if count == 0:
            return xt.window_alert("ALL BOXES CANNOT BE UNCHECKED")        
        for i in range(0,int(self.length)):
            if self.checkednums:
                s += numbers
            if self.checkedlower:
                s += lowercase_letters
            if self.checkedupper:
                s += uppercase_letters
            if self.checkedsym:
                s += symbols
        password = ''.join(random.choice(s) for _ in range(int(self.length)))
        print(password) 
        self.passwordf = password
        self.strength = zxcvbn.zxcvbn(password)["score"]
    
                
    
LIST = ["8","9","10","11","12","13","14","15","16","17","18","19","20"]
def index():
    return xt.center(
        xt.vstack(
            xt.box(
                xt.vstack(
                    xt.box(
                        xt.text("NEXTPY PASSWORD GEN WEB APPLICATION", font_size = "3em", background_image = "linear-gradient(271.68deg, #FDFCFB 0.75%, #E2D1C3 88.52%)",background_clip = "text"),
                        border = "3px dotted black",
                        padding ="30px",
                        font_family = "Lucida Console",
                        font_weight = "bold",
                    ),
                    xt.text(" "),
                    xt.text(" "),
                    xt.text(r"🫵'Treat your password like your toothbrush. Don't let anybody else use it, and get a new one every six months.'🫵", font_size = "1em" ,font_family = "Comic Sans Ms",background_image = "linear-gradient(109.6deg, rgb(255, 230, 109) 11.2%, rgb(87, 232, 107) 100.2%)",background_clip = "text"),
                    xt.text("- Clifford Stoll", font_size = "1em"),
                    xt.text(" "),
                    xt.text(" "),
                    xt.text("▼ Scroll Down ▼",font_size = "2em", color = "black",background_image = "linear-gradient(180.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)",background_clip = "text" ),
                    font_family = "Tahoma",
                    spacing = "1em",
                    color = "#f2ff00",
                ),
                margin_bottom = "175px",
                font_size = ".5em",
                ),
            xt.box(
                xt.vstack(
                    xt.box(
                    "PASSWORD GENERATOR",
                    font_family = "Monospace",
                    margin = "20px",
                    border = "1px solid white",
                    border_radius = "10px",
                    padding = "10px",
                    color = "white",
                    ),
                    xt.box(
                        xt.vstack(
                            xt.text(" "),
                            xt.hstack(
                                xt.text(" "),
                                xt.input(
                                value = CheckboxState.passwordf,
                                is_read_only = True,
                                width = "30em",
                                focus_border_color = "#6666ff",
                                border = "1px solid #6666ff",
                                height = "2em",
                                _hover = {"border": "1px solid #6666ff"},
                                color = "white",
                                ),
                                xt.button(
                                "📋",
                                variant = "solid",
                                height = "2em",
                                color_scheme = "whiteAlpha",
                                on_click = xt.set_clipboard(CheckboxState.passwordf)
                                ),
                                xt.text(" "),
                            ), 
                            xt.text(" "),
                            border_radius = "10px",
                            background_color = "#6666ff",
                        ), 
                        
                    ),
                    xt.box(
                        xt.vstack(
                            xt.text(" "),
                            xt.text(" "),
                            xt.text(" "),
                            xt.input(
                                placeholder = "Strength : " + CheckboxState.strength,
                                is_read_only = True,
                                width = "10em",
                                focus_border_color = "lightblue",
                                border = "1px solid lightblue",
                                height = "2em",
                                _hover = {"border": "1px solid lightblue"}
                                ),
                            xt.text(" "),
                            xt.text(" "),
                            xt.select(
                              LIST,
                              placeholder = "Select the length of the password",
                              background_color = "lightblue",  
                              color = "#6666ff",
                              on_change = CheckboxState.set_length,
                            ),
                            xt.text(" "),
                            xt.text(" "),
                            xt.checkbox(
                                "Include Symbols",
                                color = "white",
                                on_change = CheckboxState.set_checkedsym,
                            ),
                            xt.text(" "),
                            xt.text(" "),
                            xt.checkbox(
                                "Include Numbers",
                                color = "white",
                                on_change = CheckboxState.set_checkednums,
                            ),
                            xt.text(" "),
                            xt.text(" "),
                            xt.checkbox(
                                "Include Lowercase Characters",
                                color = "white",
                                on_change = CheckboxState.set_checkedlower,
                            ),
                            xt.text(" "),
                            xt.text(" "),
                            xt.checkbox(
                                "Include Uppercase Characters",
                                color = "white",
                                on_change = CheckboxState.set_checkedupper,
                            ),
                            xt.text(" "),
                            xt.text(" "),
                            xt.text(" "),
                            xt.text(" "),
                            xt.text(" "),
                            xt.button(
                                "Generate Password",
                                variant = "solid",
                                on_click = CheckboxState.passwordgen,
                                color_scheme = "whiteAlpha",
                                height = "2em",
                            ),
                        )
                    )
                    
                ),
                width="20em",
                height="20em",
                background_image="linear-gradient(90,#AF40FF,#5B42F3 50%,#00DDEB)",
                backdrop_filter="blur(40px)",
                border="5px solid white",
                border_radius = "10px",
                shadow="0 0 150px rgba(0,0,0,0.5)"
            ),

        ),
        padding_y="5.5em",
        font_size="2em",
        text_align="center",
        background_image = r"linear-gradient(144deg,#AF40FF,#5B42F3 50%,#00DDEB)", 
    )

style = {
    "background-color" : "red"
}
app = xt.App(style = style)
app.add_page(index, title="Centered Box")


# import nextpy as xt

# class GreetingState(xt.State):
#     name: str = "World"  # Default greeting name

#     def update_name(self, new_name: str):
#         self.name = new_name  # Update the name based on user input

# def greeting_input():
#     return xt.input(
#         placeholder="Enter your name",
#         on_change=GreetingState.update_name  # Update name on input change
#     )

# def personalized_greeting():
#     return xt.text(f"Hello, {GreetingState.name}!")  # Display personalized greeting

# def index():
#     return xt.vstack(
#         personalized_greeting(),
#         greeting_input()
#     )


