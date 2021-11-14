## my_ciphering_cli

CLI tool that will encode and decode a text by 3 substitution ciphers:
Caesar cipher
Atbash cipher
ROT-8 as variation of ROT-13

# Run application

Use command line interface:

node my_ciphering_cli -i "file_input_path" -o "file_output_path" -c "config"

# -i, --input: a path to input file is optional

If the input file option is missed - use stdin as an input source

# file_input_path

if the argument -i was passed [file_input_path] should be exist

# -o, --output: a path to output file is optional

If the output file option is missed - use stdout as an output source

# file_output_path

if the argument -o was passed [file_output_path] should be exist

# -c, --config argument is required

config for ciphers Config is a string with pattern {XY(-)}n, where:
X is a cipher mark:
C is for Caesar cipher (with shift 1)
A is for Atbash cipher
R is for ROT-8 cipher
Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
1 is for encoding
0 is for decoding

